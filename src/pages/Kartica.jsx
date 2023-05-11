import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const Kartica = ({ rez, setPets, isChecked, setIsChecked }) => {
	const [mijenjamo, postaviMjenjamo] = useState(false);
	const [formaPodaci, postaviFormaPodaci] = useState({});
	const [sort, setSort] = useState();
	// const [isChecked, setIsChecked] = useState(false);
	const [isAdopted, setIsAdopted] = useState(
		localStorage.getItem(rez.id) === "true"
	);
	const [isFavorite, setIsFavorite] = useState(
		localStorage.getItem(`favorite_${rez.id}`) === "true"
	);

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};
	async function brisiPodatak() {
		const potvrda = window.confirm(
			"Jeste li sigurni da želite obrisati ovaj podatak?"
		);
		if (potvrda) {
			await axios.delete(`http://localhost:3001/pets/${rez.id}`);

			const rezultat = await axios.get("http://localhost:3001/pets");
			setPets(rezultat.data);
		}
	}
	useEffect(() => {
		axios
			.get("http://localhost:3001/sort")
			.then((rez) => setSort(rez.data))
			.catch((err) => console.log(err.message));
	}, []);

	function pokreniUredivanje() {
		postaviFormaPodaci({
			name: rez.name,
			image: rez.image,
			age: rez.age,
			paragraf: rez.paragraf,
			sort: rez.sort,
		});
		postaviMjenjamo(true);
	}
	useEffect(() => {
		console.log(formaPodaci);
	}, [mijenjamo]);

	function obradiPodatke(objekt) {
		return {
			name: objekt.name,
			age: objekt.age,
			image: objekt.image,
			paragraf: objekt.paragraf,
			sort: objekt.sort,
		};
	}

	async function spremiPodatke() {
		const zaSlanje = obradiPodatke(formaPodaci);

		await axios.put(`http://localhost:3001/pets/${rez.id}`, zaSlanje);

		const rezultat = await axios.get("http://localhost:3001/pets");
		setPets(rezultat.data);
		postaviMjenjamo(false);
	}
	const promjenaUlaza = (event) => {
		const { name, value } = event.target;

		postaviFormaPodaci((formaPodaci) => ({
			...formaPodaci,
			[name]: value,
		}));
		const formaPodaciJson = JSON.stringify(formaPodaci);
		console.log(formaPodaciJson);
	};

	const handleAdoptClick = () => {
		setIsAdopted(true);
		localStorage.setItem(rez.id, true);
	};
	const toggleDisabled = () => {
		setIsAdopted(false);
		localStorage.setItem(rez.id, false);
	};
	const handleFavoriteClick = () => {
		setIsFavorite(!isFavorite);
	};
	useEffect(() => {
		localStorage.setItem(`favorite_${rez.id}`, isFavorite);
	}, [isFavorite, rez.id]);

	useEffect(() => {
		if (localStorage.getItem(rez.id) === "true") {
			setIsAdopted(true);
		}
	}, [rez.id]);
	return (
		<div>
			<div
				className="relative"
				style={{ display: isChecked ? "block" : "none" }}
			>
				<label class="absolute top-0 right-0   cursor-pointer ">
					<input
						type="checkbox"
						value=""
						class="sr-only peer"
						checked={isChecked}
						onChange={handleCheckboxChange}
					/>
					{/* <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
				</label>
			</div>
			{/* <p>{rez.name}</p>
			<img src={rez.image} alt={rez.name} />
			<p>{rez.paragraph}</p>
			<p>{rez.sort}</p>
			<p>{rez.age}</p> */}
			<section class="">
				<div
					class={`${
						isAdopted ? "opacity-50 pointer-events-none" : ""
					} bg-white dark:bg-gray-900`}
				>
					<div class="flex bg-gray-100 rounded mb-4">
						<div class="relative ">
							{mijenjamo ? (
								<input
									class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
									type="url"
									name="image"
									value={formaPodaci.image}
									onChange={promjenaUlaza}
								/>
							) : (
								<img
									class="w-60 h-52 aspect-w-3 aspect-h-3 rounded-lg sm:rounded-none sm:rounded-l-lg"
									src={rez.image}
									alt={`${rez.name} Avatar`}
								/>
							)}
							<button
								class={`absolute bottom-2 right-2 text-blue-500 focus:outline-none ${
									isFavorite ? "text-red-500" : ""
								}`}
								onClick={handleFavoriteClick}
							>
								<HeartIcon class="absolute bottom-2 right-2 w-8" />
							</button>
						</div>
						<div class="p-3">
							<p>{rez.sort}</p>
							<div class="p-2">
								{mijenjamo ? (
									<input
										class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
										type="text"
										name="name"
										value={formaPodaci.name}
										onChange={promjenaUlaza}
										//Dodati required
									/>
								) : (
									<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
										<h4>{rez.name}</h4>
									</h3>
								)}

								<span class="text-gray-500 dark:text-gray-400">
									Age: {rez.age}
								</span>
							</div>
							<button
								class={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 ${
									isAdopted
										? "opacity-50 cursor-not-allowed"
										: ""
								}`}
								onClick={handleAdoptClick}
								disabled={isAdopted}
							>
								Adopt
							</button>
						</div>

						<p class="p-1.5 mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
							{" "}
							{rez.paragraf}
						</p>
					</div>
				</div>

				<button
					class={`absolute bottom-2 right-2 text-red-500 focus:outline-none ${
						isFavorite ? "text-red-600" : ""
					}`}
					onClick={handleFavoriteClick}
				></button>
				{isChecked ? (
					<>
						{mijenjamo ? (
							<button
								className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
								onClick={spremiPodatke}
							>
								Spremi
							</button>
						) : (
							<button
								className="bg-pink-500 	bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
								onClick={pokreniUredivanje}
							>
								Uredi
							</button>
						)}

						<button
							className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
							onClick={brisiPodatak}
						>
							Obriši
						</button>
						<button
							className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
							onClick={toggleDisabled}
						>
							Cancel adoption
						</button>
					</>
				) : null}
			</section>
		</div>
	);
};
export default Kartica;
