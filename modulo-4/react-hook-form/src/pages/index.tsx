import {Inter} from "next/font/google";
import { useEffect } from "react";
import {useForm} from "react-hook-form";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	const {
		register,
		handleSubmit,
    watch,
    setFocus,
    reset,
		formState: {errors},
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			gender: "",
		},
	});

	const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
	});

  console.log(errors);
  
  useEffect(() => {
    setFocus("email");
   }, []);

	return (
		<main
			className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
		>
			<h1 className="text-3xl text-indigo-500 font-bold">React Hook Form</h1>
			<div className="max-w-md w-full mx-auto mt-10">
				<div className="bg-white p-8 rounded-lg shadow-md w-full">
					<form className="flex flex-col gap-5" onSubmit={onSubmit}>
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
								{...register("firstName", {
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
									minLength: {
										value: 3,
										message: "El nombre debe tener al menos 3 caracteres",
									},
								})}
							/>
							{errors.firstName && (
								<span className="text-red-500 text-sm">
									{errors.firstName.message}
								</span>
							)}
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
								{...register("lastName", {
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
									minLength: {
										value: 3,
										message: "El nombre debe tener al menos 3 caracteres",
									},
								})}
							/>
							{errors.lastName && (
								<span className="text-red-500 text-sm">
									{errors.lastName.message}
								</span>
							)}
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
								{...register("email", {
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
										message: "El email no es válido",
									},
								})}
							/>
							{errors.email && (
								<span className="text-red-500 text-sm">
									{errors.email.message}
								</span>
							)}
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
								{...register("password", {
									required: {
										value: true,
										message: "Este campo es obligatorio",
									},
									minLength: {
										value: 6,
										message: "La contraseña debe tener al menos 6 caracteres",
									},
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
										message:
											"La contraseña debe tener al menos una mayúscula, una minúscula y un número",
									},
								})}
							/>
							{errors.password && (
								<span className="text-red-500 text-sm">
									{errors.password.message}
								</span>
							)}
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
                {...register("confirmPassword", {
                  validate: (value) => value === watch("password") || "Las contraseñas no coinciden"
                })}
              />
              {errors.confirmPassword && (
								<span className="text-red-500 text-sm">
									{errors.confirmPassword.message}
								</span>
							)}
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
                {...register("gender", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio"
                  }
                })}
							>
								<option value="female">Femenino</option>
								<option value="male">Masculino</option>
								<option value="other">Otro</option>
              </select>
              {errors.gender && (
								<span className="text-red-500 text-sm">
									{errors.gender.message}
								</span>
							)}
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
				<div className="mt-6 text-white">
					<pre>{JSON.stringify(watch(), null, 2)}</pre>
				</div>
			</div>
		</main>
	);
}
