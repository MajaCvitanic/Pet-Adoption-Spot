import React, { useState, useEffect } from "react";

import "./Pets.css";

import Kartica from "./Kartica";
//Tablica

const Pets = ({ pets, setPets }) => {
	const [filterSort, setFilterSort] = useState("");
	const [filteredPets, setFilteredPets] = useState(pets);
	const [showFiltered, setShowFiltered] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const options = ["Dog", "Cat", "Other"];

	const handleFilterSortChange = (event) => {
		const selectedSort = event.target.value;
		setFilterSort(selectedSort);
		if (selectedSort === "show all") {
			setFilteredPets(pets);
			setShowFiltered(false);
		} else {
			const filteredData = pets.filter((pet) =>
				pet.sort.toLowerCase().includes(selectedSort.toLowerCase())
			);
			setFilteredPets(filteredData);
			setShowFiltered(true);
		}
	};

	const handleShowAllButtonClick = () => {
		setFilteredPets(pets);
		setShowFiltered(false);
	};

	return (
		<>
			<div
				className="m-auto my-2 grid w-[40rem] grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2"
				x-data="app"
			>
				{options.map((option) => (
					<div key={option}>
						<input
							type="radio"
							name="option"
							id={option}
							className="peer hidden"
							value={option.toLowerCase()}
							onChange={handleFilterSortChange}
						/>
						<label
							htmlFor={option}
							className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
						>
							{option}
						</label>
					</div>
				))}
				<button
					className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white 
				 bg-blue-500 text-white"
					onClick={handleShowAllButtonClick}
				>
					Show All
				</button>
			</div>
			<div className=" m-2 relative ">
				<label class="absolute bottom-0 left-0 inline-flex items-center cursor-pointer ">
					<input
						type="checkbox"
						value=""
						class="sr-only peer"
						checked={isChecked}
						onChange={() => setIsChecked(!isChecked)}
					/>

					<div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			</div>
			<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
				EMPLOYEE
			</span>
			<div className="m-auto">
				<div className="m-8 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{showFiltered
						? filteredPets.map((pet) => (
								<Kartica
									key={pet.id}
									rez={pet}
									setPets={setPets}
									isChecked={isChecked}
								/>
						  ))
						: pets.map((pet) => (
								<Kartica
									key={pet.id}
									rez={pet}
									setPets={setPets}
									isChecked={isChecked}
								/>
						  ))}
				</div>
			</div>
		</>
	);
};

export default Pets;
