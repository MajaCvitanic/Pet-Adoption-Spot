import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const Kartica = ({ rez }) => {
	const [isAdopted, setIsAdopted] = useState(
		localStorage.getItem(rez.id) === "true"
	);

	const [isFavorite, setIsFavorite] = useState(
		localStorage.getItem(`favorite_${rez.id}`) === "true"
	);

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
							<img
								class="w-60 h-52 aspect-w-3 aspect-h-3 rounded-lg sm:rounded-none sm:rounded-l-lg"
								src={rez.image}
								alt={`${rez.name} Avatar`}
							></img>
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
								<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
									<h4>{rez.name}</h4>
								</h3>
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
				<button onClick={toggleDisabled}>Helper Button</button>
				<button
					class={`absolute bottom-2 right-2 text-red-500 focus:outline-none ${
						isFavorite ? "text-red-600" : ""
					}`}
					onClick={handleFavoriteClick}
				></button>
			</section>
		</div>
	);
};
export default Kartica;
