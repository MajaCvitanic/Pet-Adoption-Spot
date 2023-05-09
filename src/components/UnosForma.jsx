import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const UnosForma = (props) => {
	const [sort, setSort] = useState([]);
	const [formaPodaci, setFormaPodaci] = useState({
		name: "",
		age: "",
		image: "",
		paragraf: "",
		sort: "",
	});
	const options = ["Dog", "Cat", "Other"];

	useEffect(() => {
		axios
			.get("http://localhost:3001/sort")
			.then((rez) => setSort(rez.data))
			.catch((err) => console.log(err.message));
	}, []);

	const saljiPodatke = async (event) => {
		event.preventDefault();
		console.log(formaPodaci);
		const zaSlanje = obradiPodatke(formaPodaci);

		await axios.post("http://localhost:3001/pets", zaSlanje).then((rez) => {
			props.setPets((stanje) => [...stanje, rez.data]);
			setFormaPodaci({
				name: "",
				age: "",
				image: "",
				paragraf: "",
				sort: "",
			});

			console.log(rez);
		});
	};

	function promjenaUlaza(event) {
		console.log(event.target);
		const { name, value } = event.target;
		setFormaPodaci({ ...formaPodaci, [name]: value });
	}
	function obradiPodatke(objekt) {
		return {
			name: objekt.name,
			age: objekt.age,
			image: objekt.image,
			paragraf: objekt.paragraf,
			sort: objekt.sort,
		};
	}

	return (
		<>
			<div class="flex justify-center mb-8">
				<form class="w-full max-w-lg" onSubmit={saljiPodatke}>
					<div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
						<label>
							Name:
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								type="text"
								name="name"
								value={formaPodaci.name}
								onChange={promjenaUlaza}
								//Dodati required
							/>
						</label>
						<label>
							Age:
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								type="text"
								name="age"
								value={formaPodaci.age}
								onChange={promjenaUlaza}
							/>
						</label>
						<label>
							Sort:
							<select
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								label="sort"
								name="sort"
								value={formaPodaci.sort}
								onChange={promjenaUlaza}
							>
								{options.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</label>
						<label>
							Image:
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								type="url"
								name="image"
								value={formaPodaci.image}
								onChange={promjenaUlaza}
							/>
						</label>
						<label>
							Description:
							<textarea
								class="resize-y appearance-none block  w-full p-3 shadow  border rounded dark:bg-gray-800"
								type="text"
								name="paragraf"
								value={formaPodaci.paragraf}
								onChange={promjenaUlaza}
							/>
						</label>
					</div>

					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
						type="submit"
					>
						Add Pet
					</button>
				</form>
			</div>
		</>
	);
};

export default UnosForma;
