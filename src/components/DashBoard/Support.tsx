import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt, FaEnvelope} from "react-icons/fa";
import axios from "axios";

// Define the marker icon
const markerIcon = new L.Icon({
	iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
	shadowSize: [41, 41],
});

const Support: React.FC = () => {
	const position: [number, number] = [37.0902, -95.7129];
	const [complaint, setComplaint] = useState("")
	const [isValid, setIsValid] = useState(true);

	const handleComplaintChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setComplaint(value);
		setIsValid(value.trim().length > 0);
	};

	const handleSubmitComplaint = async () => {
		if (isValid) {
			try {
				await axios.post("/api/complaints", { complaint });
				alert("Complaint submitted successfully!");
				setComplaint("");
			} catch (error) {
				alert("Error submitting complaint. Please try again later.");
			}
		} else {
			alert("Please enter a valid complaint.");
		}
	};

	return (
		<div className='max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10'>
			<h2 className='text-3xl font-bold mb-6 text-center text-red-600'>Contact Details</h2>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10'>
				<div className='bg-gray-100 p-6 rounded-lg shadow-inner'>
					<FaEnvelope className='text-red-600 text-3xl mb-4 mx-auto' />
					<h3 className='text-xl font-semibold mb-2'>Email Address</h3>
					<p>Sheritage144@gmail.com</p>
				</div>
				{/* <div className='bg-gray-100 p-6 rounded-lg shadow-inner'>
					<FaPhoneAlt className='text-red-600 text-3xl mb-4 mx-auto' />
					<h3 className='text-xl font-semibold mb-2'>Phone Number</h3>
					<p>
						Emergency Cases
						<br />
						+1 (207) 402-1612 (24/7)
					</p>
				</div> */}
			</div>

			<div className='h-96 rounded-lg overflow-hidden shadow-lg'>
				<div className='bg-gray-100 w-[13rem] p-6 rounded-lg shadow-inner'>
					<FaMapMarkerAlt className='text-red-600 text-3xl mb-4 mx-auto' />
					<h3 className='text-xl font-semibold mb-2'>Our Location</h3>
					<p>
  123 Main St.
  <br />
  Anytown, USA
</p>

				</div>
				<MapContainer center={position} zoom={13} scrollWheelZoom={false} className='h-full w-full'>
					<TileLayer
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					/>
					<Marker position={position} icon={markerIcon}>
						<Popup>
							Our Location
							<br />
							123 Main St, Anytown USA 12345
						</Popup>
					</Marker>
				</MapContainer>
			</div>

			<div className='mb-8'>
				<h3 className='text-2xl font-bold mb-4'>Submit a Complaint</h3>
				<textarea
					className={`w-full p-2 border rounded-md ${
						isValid ? "border-gray-300" : "border-red-500"
					}`}
					rows={4}
					placeholder='Enter your complaint here...'
					value={complaint}
					onChange={handleComplaintChange}
				/>
				<button
					className='bg-red-600 text-white px-4 py-2 rounded-md mt-2'
					onClick={handleSubmitComplaint}
					disabled={!isValid}
				>
					Submit Complaint
				</button>
			</div>
		</div>
	);
};

export default Support;
