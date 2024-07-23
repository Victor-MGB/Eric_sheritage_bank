import axios from "axios";
import React, { useContext, useEffect, useState, } from "react";
import { UserDataCOntext } from "../App";

import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const CurrencyDropDwn: React.FC<{ getter: ( value: string ) => void; }> = ( { getter } ) =>
{
  const [currency, setCurrency] = useState<string>( "" );
  const [baseCurrency, setBaseCurrency] = useState<string>( "USD" );
  const [, setTargetCurrency] = useState<string>( "" );
  const [conversionResult, setConversionResult] = useState<number | null>( null );
  const [loading, setLoading] = useState<boolean>( false );
  const [error, setError] = useState<string | null>( null );

  //currency store
  const currencyArr = [
    { currency: "USD" },
    { currency: "EUR" },
    { currency: "GBP" },
    { currency: "AUD" },
    { currency: "CAD" },
    { currency: "CHF" },
    { currency: "CNY" },
    { currency: "JPY" },
    { currency: "KRW" },
    { currency: "MXN" },
    { currency: "NZD" },
    { currency: "RUB" },
    { currency: "SEK" },
    { currency: "SGD" },
    { currency: "TRY" },
    { currency: "ZAR" },
  ];
//"5593454134"
  //selection handler
  function selectionHandler ( e: React.ChangeEvent<HTMLSelectElement> )
  {
    setCurrency( e.target.value );
    getter( e.target.value );
    setBaseCurrency( "USD" );
    setTargetCurrency( e.target.value );
    handleConvert( e.target.value );

    //save local storage
    localStorage.setItem( "currency", e.target.value );
  }

  const userAccountBalance = useContext( UserDataCOntext )?.accounts[0].balance || 0;

  //conversion handler
  const handleConvert = async ( value: string ) =>
  {
    // console.log( 'active' );
    setLoading( true );
    setError( null );

    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/90f39f506bd222b58c671097/pair/${ baseCurrency }/${ value }/${ userAccountBalance }`
      );
      setConversionResult( response.data.conversion_result );
    } catch ( err ) {
      setLoading( false );
      setError( "Failed to fetch conversion rate" );
    } finally {
      setLoading( false );
    }
  };

  //save the conversion result to the sessionStorage
  useEffect( () =>
  {
    console.log( conversionResult );
    if ( conversionResult ) {
      sessionStorage.setItem( "conversionResult", JSON.stringify( conversionResult ) );
    }
  }, [conversionResult] );

  return (
    <>
      <select
        value={ currency }
        // onClick={ handleConvert }
        onChange={ selectionHandler }
        style={ {
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#fff",
          outline: "none",
          cursor: "pointer",
          transition: "border-color 0.3s ease",
        } }
      >
        <option
          disabled
          value={ '' }
        >
          Select Currency
        </option>

        { currencyArr.map( ( currency, index ) => (
          <option
            key={ index }
            value={ currency.currency }
            className="text-gray-800 flex items-center justify-center font-bold p-2 m-2 rounded-md hover:bg-gray-50 cursor-pointer"
          >
            { currency.currency }
          </option>
        ) ) }
      </select>
      { loading && <span className="text-xs text-blue-500 ml-2">converting...</span> }
      { error && <FaXmark className="text-xs text-red-700 ml-2" /> }
      { !loading && !error && <FaCheck className="text-sm text-green-700 ml-2" /> }
    </>
  );
};

export default CurrencyDropDwn;
