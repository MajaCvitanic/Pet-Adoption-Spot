import React from "react";

const AdoptForm = () => {
	return (
		// ADD VALIDATION AND REQUIRED
		<>
			<section class="bg-white dark:bg-gray-900">
				<div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-5 lg:px-6 ">
					<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
						<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							You Have a Friend That Needs a New Home?
						</h2>
						<p class="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">
							Fill our adoption form to help us learn more about
							your pet, including its name, age, and any special
							needs or preferences. We also ask for a photo of
							your pet, as this will help us match it with a
							suitable new owner. Rest assured that we will handle
							your application with care and sensitivity, and do
							our best to find your pet a happy and safe new home.
						</p>
					</div>
					<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"></div>
				</div>
			</section>
			<div class="flex justify-center mb-8">
				<form class="w-full max-w-lg">
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-first-name"
							>
								First Name
							</label>
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								id="grid-first-name"
								type="text"
							/>
							{/* <p class="text-red-500 text-xs italic">
							Please fill out this field.
						</p> */}
						</div>
						<div class="w-full md:w-1/2 px-3">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-last-name"
							>
								Last Name
							</label>
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								id="grid-last-name"
								type="text"
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-2">
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-pet-name"
							>
								Pet name
							</label>
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								id="grid-city"
								type="text"
							/>
						</div>

						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold w-full md:w-2/3 px-3  md:mb-0">
							<span class="">Upload pet photo</span>

							<input
								type="file"
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800
    "
							/>
						</label>
					</div>
					<div class="flex flex-wrap -mx-3 mb-2">
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-city"
							>
								Age
							</label>
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								id="grid-city"
								type="text"
							/>
						</div>

						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-state"
							>
								Kind
							</label>
							<div class="relative">
								<select
									class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
									id="grid-state"
								>
									<option>Dog</option>
									<option>Cat</option>
									<option>Other</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										class="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-city"
							>
								City
							</label>
							<input
								class="w-full p-3 shadow appearance-none border rounded dark:bg-gray-800"
								id="grid-zip"
								type="text"
							/>
						</div>
						<div class="w-full md:w-3/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-destription"
							>
								Destription
							</label>
							<textarea
								class="resize-y appearance-none block  w-full p-3 shadow  border rounded dark:bg-gray-800"
								id="grid-textarea"
								type="textarea"
								placeholder="Make it as long as you'd like"
							/>
						</div>
					</div>
					<button className="bg-rose-500 hover:bg-rose-700 text-white  py-2 px-4 border border-rose-700 rounded">
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default AdoptForm;
