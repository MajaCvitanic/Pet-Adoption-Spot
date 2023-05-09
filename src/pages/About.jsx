import React from "react";

function About() {
	return (
		<div className="">
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
			<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
				<div className="flex flex-col justify-between">
					<div className="space-y-2">
						<h2 className="mb-1 p-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Let's talk!
						</h2>
						<div className="font-light p-6 text-gray-500 lg:mb-4 sm:text-xl dark:text-gray-400">
							You would like to volunteer? You can help as with
							something or have something to say? Send message.
						</div>
					</div>

					<img
						src="https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGFuaW1hbCUyMHNoZWx0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="p-6  aspect-auto"
					/>
				</div>
				<form
					novalidate=""
					className="space-y-6 ng-untouched ng-pristine ng-valid"
				>
					<div>
						<label
							for="name"
							className="font-light text-gray-500 lg:mb-4 sm:text-xl dark:text-gray-400"
						>
							Full name
						</label>
						<input
							id="name"
							type="text"
							placeholder=""
							className="w-full p-3 rounded dark:bg-gray-800 shadow appearance-none border "
						/>
					</div>
					<div>
						<label
							for="email"
							className="font-light text-gray-500 lg:mb-4 sm:text-xl dark:text-gray-400"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							className="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
						/>
					</div>
					<div>
						<label
							for="message"
							className="font-light text-gray-500 lg:mb-4 sm:text-xl dark:text-gray-400"
						>
							Message
						</label>
						<textarea
							id="message"
							rows="3"
							className="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full p-3 font-light text-gray-500 lg:mb-4 sm:text-xl dark:text-gray-400  tracking-wide uppercase rounded dark:bg-violet-400 "
					>
						Send Message
					</button>
				</form>
			</div>

			<div class="bg-white py-4 sm:py-2">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl lg:text-center">
						<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Everything you need to know about us
						</p>
						<p class="mt-6 text-lg leading-8 text-gray-600">
							From Adoption to Training: Discover the Diverse
							Activities and Services Provided by Our Animal
							Shelter.
						</p>
					</div>
					<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							<div class="relative pl-16">
								<dt class="text-base font-semibold leading-7 text-white-900">
									<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="white"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
											/>
										</svg>
									</div>
									Adoption
								</dt>
								<dd class="mt-2 text-base leading-7 text-gray-600">
									Morbi viverra dui mi arcu sed. Tellus semper
									adipiscing suspendisse semper morbi. Odio
									urna massa nunc massa.
								</dd>
							</div>
							<div class="relative pl-16">
								<dt class="text-base font-semibold leading-7 text-gray-900">
									<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="white"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
											/>
										</svg>
									</div>
									Training certificates
								</dt>
								<dd class="mt-2 text-base leading-7 text-gray-600">
									Sit quis amet rutrum tellus ullamcorper
									ultricies libero dolor eget. Sem sodales
									gravida quam turpis enim lacus amet.
								</dd>
							</div>
							<div class="relative pl-16">
								<dt class="text-base font-semibold leading-7 text-gray-900">
									<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="white"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											/>
										</svg>
									</div>
									Multiple location
								</dt>
								<dd class="mt-2 text-base leading-7 text-gray-600">
									Quisque est vel vulputate cursus. Risus
									proin diam nunc commodo. Lobortis auctor
									congue commodo diam neque.
								</dd>
							</div>
							<div class="relative pl-16">
								<dt class="text-base font-semibold leading-7 text-gray-900">
									<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="white"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
											/>
										</svg>
									</div>
									Health checkup
								</dt>
								<dd class="mt-2 text-base leading-7 text-gray-600">
									Arcu egestas dolor vel iaculis in ipsum
									mauris. Tincidunt mattis aliquet hac quis.
									Id hac maecenas ac donec pharetra eget.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;
