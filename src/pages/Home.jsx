import React from "react";
import AdoptForm from "./AdoptForm";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<section class="relative bg-[url(https://www.supboardguide.com/wp-content/uploads/2021/10/image1-1.jpg)] bg-cover bg-center bg-no-repeat">
				<div class="absolute inset-0 bg-white/55 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

				<div class=" relative  mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items-end lg:justify-end  flex justify-center lg:px-8  ">
					<div class="container mx-auto bg-white/30 max-w-xl text-center   ">
						<h1 class="text-3xl font-extrabold sm:text-5xl">
							Need companion for your
							<strong class="block font-extrabold text-rose-700">
								next adventure?
							</strong>
						</h1>

						{/* <p class="mt-4 max-w-lg sm:text-xl/relaxed">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Nesciunt illo tenetur fuga ducimus numquam ea!
						</p> */}

						<div class="justify-center mt-8 mb-8 flex flex-wrap gap-4 text-center">
							<Link to="/homePets">
								<button className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-strong text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
									Get Started
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section class="bg-white dark:bg-gray-900">
				<div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 ">
					<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-4">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Our Team
						</h2>
						<p class="font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400">
							Our team at Pet Adoption Spot is dedicated to
							rescuing and rehabilitating animals in need, and
							finding them loving forever homes through our
							adoption program. We believe that every animal
							deserves a second chance, and we work tirelessly to
							provide them with the care and attention they need
							to thrive. With the help of our dedicated volunteers
							and supporters, we have been able to make a real
							difference in the lives of countless animals in our
							community.
						</p>
					</div>
					<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"></div>
				</div>
			</section>
			<AdoptForm />
			{/* <img
				src="https://www.supboardguide.com/wp-content/uploads/2021/10/image1-1.jpg"
				alt="dog"
			></img> */}
		</div>
	);
};

export default Home;
