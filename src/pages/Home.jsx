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
			<div>
				<div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
					<h3 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Testimonials
					</h3>
					<p class="font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Fugit, error amet numquam iure provident voluptate
						esse quasi, veritatis totam voluptas nostrum quisquam
						eum porro a pariatur veniam.
					</p>
				</div>

				<div class="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
					<div class="mb-12 md:mb-0">
						<div class="mb-6 flex justify-center">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I5UtDfX5SzpFbARAD53Tr-AUE-KXmVyyLQ&usqp=CAU"
								class="w-32 rounded-full shadow-lg dark:shadow-black/30"
								alt="pup"
							/>
						</div>
						<h5 class="mb-4 text-gray-500 dark:text-gray-400font-semibold">
							Hank
						</h5>
						<h6 class="mb-4 font-semibold  text-gray-500 dark:text-gray-400font-semibold">
							Hanks mom
						</h6>
						<p class="mb-4 text-gray-500 dark:text-gray-400font-semibold">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="inline-block h-7 w-7 pr-2"
								viewBox="0 0 24 24"
							>
								<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
							</svg>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quod eos id officiis hic tenetur quae quaerat
							ad velit ab hic tenetur.
						</p>
					</div>

					<div class="mb-0">
						<div class="mb-0">
							<div class="mb-6 flex justify-center">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXjWhp5QEw00IPgB4evWBu5ogVrou9OefyE67j03R4uacwEB19Dc3p9Jl5KczlRpvWHII&usqp=CAU"
									class="w-32 rounded-full shadow-lg dark:shadow-black/30"
									alt="pup"
								/>
							</div>
							<h5 class="mb-4 text-gray-500 dark:text-gray-400font-semibold">
								Bobby Snow
							</h5>
							<h6 class="mb-4 font-semibold  text-gray-500 dark:text-gray-400font-semibold">
								Bobbys brother
							</h6>
							<p class="mb-4 text-gray-500 dark:text-gray-400font-semibold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="inline-block h-7 w-7 pr-2"
									viewBox="0 0 24 24"
								>
									<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
								</svg>
								At vero eos et accusamus et iusto odio
								dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti atque corrupti.
							</p>
						</div>
					</div>
					<div class="mb-0">
						<div class="mb-6 flex justify-center">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTasEu6LLWzKcfX10jsdPyTosw5B-UYrjJJy_c8ltcSYuGh71ohi70vfmcs61NgQsFXxxI&usqp=CAU"
								class="w-32 rounded-full shadow-lg dark:shadow-black/30"
								alt="pup"
							/>
						</div>
						<h5 class="mb-4 text-gray-500 dark:text-gray-400font-semibold">
							Truck
						</h5>
						<h6 class="mb-4 font-semibold  text-gray-500 dark:text-gray-400font-semibold">
							Trucks dad
						</h6>
						<p class="mb-4 text-gray-500 dark:text-gray-400font-semibold">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="inline-block h-7 w-7 pr-2"
								viewBox="0 0 24 24"
							>
								<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
							</svg>
							At vero eos et accusamus et iusto odio dignissimos
							ducimus qui blanditiis praesentium voluptatum
							deleniti atque corrupti.
						</p>
					</div>
				</div>
			</div>
			<AdoptForm />
			{/* <img
				src="https://www.supboardguide.com/wp-content/uploads/2021/10/image1-1.jpg"
				alt="dog"
			></img> */}
		</div>
	);
};

export default Home;
