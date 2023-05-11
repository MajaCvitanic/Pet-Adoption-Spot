import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pets.css";
import UnosForma from "../components/UnosForma";
import Pet from "../components/Pet";
import { HeartIcon } from "@heroicons/react/24/solid";
import Kartica from "./Kartica";
//Tablica

const Pets = ({ pets, setPets, props }) => {
	const [filterSort, setFilterSort] = useState("");
	const [filteredPets, setFilteredPets] = useState(pets);
	const [showFiltered, setShowFiltered] = useState(false);

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

			<div className="m-auto">
				<div className="m-8 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{showFiltered
						? filteredPets.map((pet) => (
								<Kartica
									key={pet.id}
									rez={pet}
									setPets={setPets}
									// isChecked={isChecked}
									// checked={pet.isChecked}
								/>
						  ))
						: pets.map((pet) => {
								return (
									<Kartica
										key={pet.id}
										rez={pet}
										setPets={setPets}
									/>
								);
						  })}
				</div>
			</div>
		</>
	);
};

export default Pets;
