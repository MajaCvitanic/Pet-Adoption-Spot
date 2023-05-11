import Footer from "../components/Footer";
import React, { useState } from "react";

const Donation = () => {
	const [amount, setAmount] = useState(0);
	const [donationType, setDonationType] = React.useState("food");

	const handleDonationTypeChange = (e) => {
		setDonationType(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		window.location.href = `https://www.paypal.com/`;
	};

	return (
		<div>
			<div class="bg-white rounded-lg shadow-md p-8 w-full max-w-md mx-auto mt-4">
				<h1 class="text-3xl font-bold mb-4">Donate to Help Our Pets</h1>
				<p class="mb-4">
					We appreciate your generosity in helping to provide food,
					toys, beds, and harnesses for our beloved pets.
				</p>
				<form onSubmit={handleSubmit}>
					<label class="block mb-2">
						<span class="font-bold">Choose a donation type:</span>
						<select
							class="block w-full mt-1"
							value={donationType}
							onChange={handleDonationTypeChange}
						>
							<option value="food">Food</option>
							<option value="toys">Toys</option>
							<option value="beds">Beds</option>
							<option value="harnesses">Harnesses</option>
						</select>
					</label>
					<label class="block mb-2" htmlFor="donation-amount">
						<span class="font-bold">Amount:</span>
						<input
							class="block w-full mt-1"
							type="number"
							id="donation-amount"
							name="donation-amount"
							min="0"
							step="1"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							required
						></input>
					</label>

					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Donate
					</button>
				</form>
			</div>

			<Footer />
		</div>
	);
};

export default Donation;
