import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pets.css";
import UnosForma from "../components/UnosForma";
import Pet from "../components/Pet";
import Pets from "./Pets";
//App.js

const HomePets = () => {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/pets/")
			.then((res) => setPets(res.data))
			.catch((err) => console.log(err.message));
	}, []);

	return (
		<>
			<section class="bg-white dark:bg-gray-900 ">
				<div className="m-auto">
					<div
						class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 
						relative bg-[url(https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-center bg-no-repeat "
					>
						<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-12">
							<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
								<div class="px-2 items-center bg-white/75  rounded-lg shadow sm:flex-wrap dark:bg-gray-800 dark:border-gray-700">
									<h2 class="mb-4 py-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
										Adopt a Furry Friend Today!
									</h2>
									<p class="font-light px-2 text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
										Welcome to our adoption page where you
										can browse through a variety of animals
										looking for their forever homes. From
										cuddly cats to playful puppies, we have
										a range of furry friends just waiting to
										be loved. Simply scroll through the
										photos and descriptions of each animal
										until you find one that tugs at your
										heartstrings. If you find an animal that
										you are interested in, simply click the
										"adopt" button and it will redirect you
										to the page of the selected animal where
										you can fill out a form to begin the
										adoption process. Don't wait, start your
										journey to finding your new furry best
										friend today!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" mb-4 ">
					<Pets pets={pets} setPets={setPets} />
				</div>{" "}
			</section>
			{/* <div>
				<UnosForma setPets={setPets} sort={setPets.sort} />
			</div> */}
		</>
	);
};

export default HomePets;
