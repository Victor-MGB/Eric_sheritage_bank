const StageBTN: React.FC<{ incrementCounter: () => void }> = ({ incrementCounter }) => {
      return (
            <button
                  type={"button"}
                  className='flex flex-col items-center justify-center h-full w-full'
                  onClick={incrementCounter}
            >
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Next</button>
            </button>
      );
};

export default StageBTN; 
