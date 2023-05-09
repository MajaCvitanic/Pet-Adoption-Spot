import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pets.css";
import UnosForma from "../components/UnosForma";
import Pet from "../components/Pet";
import Kartica from "./Kartica";
//Tablica

const Pets = ({ pets }) => {
	return (
		<>
			<div class="m-auto">
				<div className="m-10 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{pets.map((r) => (
						<Kartica key={r.id} rez={r} />
					))}
				</div>
			</div>
		</>
	);
};

export default Pets;
