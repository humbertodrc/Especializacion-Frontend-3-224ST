import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
		>
			<h1 className="text-3xl text-indigo-500 font-bold">React Hook Form</h1>
			<div className="max-w-md w-full mx-auto mt-10">
				<div className="bg-white p-8 rounded-lg shadow-md w-full">
					<form className="flex flex-col gap-5">
						{/* Nombre */}
						<div>
							<label
								htmlFor="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Nombre:
							</label>
							<input
								type="text"
								id="firstName"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								required
							/>
						</div>

						{/* Apellido */}
						<div>
							<label
								htmlFor="lastName"
								className="block text-sm font-medium text-gray-700"
							>
								Apellido:
							</label>
							<input
								type="text"
								id="lastName"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								required
							/>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email:
							</label>
							<input
								type="email"
								id="email"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								required
							/>
						</div>

						{/* Contraseña */}
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Contraseña:
							</label>
							<input
								type="password"
								id="password"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								required
							/>
						</div>

						{/* Confirmar contraseña */}
						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-700"
							>
								Confirmar Contraseña:
							</label>
							<input
								type="password"
								id="confirmPassword"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								required
							/>
						</div>

						{/* Género */}
						<div>
							<label
								htmlFor="gender"
								className="block text-sm font-medium text-gray-700"
							>
								Género:
							</label>
							<select
								id="gender"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
							>
								<option value="female">Femenino</option>
								<option value="male">Masculino</option>
								<option value="other">Otro</option>
							</select>
						</div>

						{/* Botón de Envío */}
						<div className="mt-4">
							<button
								type="submit"
								className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
							>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
