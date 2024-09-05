import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface FormValues {
	name: string;
	lastName: string;
	email: string;
}

export const Form = () => {
	const schema = yup.object({
		name: yup
			.string()
			.required("El nombre es requerido")
			.min(3, "El nombre debe tener al menos 3 caracteres")
			.max(10, "El nombre debe tener como máximo 10 caracteres"),
		lastName: yup
			.string()
			.required("El apellido es requerido")
			.min(3, "El apellido debe tener al menos 3 caracteres")
			.max(10, "El apellido debe tener como máximo 10 caracteres"),
		email: yup
			.string()
			.required("El correo es requerido")
			.email("El correo no es válido")
			.matches(/@gmail.com$/, "El correo debe ser de gmail"),
		country: yup.string().required("El país es requerido"),
		city: yup.string().required("La ciudad es requerida"),
		address: yup
			.string()
			.required("La dirección es requerida")
			.min(5, "La dirección debe tener al menos 5 caracteres"),
	});

	const {
		control,
		formState: {errors},
		handleSubmit,
	} = useForm({
		defaultValues: {
			name: "",
			lastName: "",
			email: "",
			country: "",
			city: "",
			address: "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	console.log(errors);

	return (
		<Container sx={{width: "500px"}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Paper
					sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
				>
					{/* Paso 1 Datos personales */}
					<Controller
						name="name"
						control={control}
						render={({field}) => (
							<TextField
								{...field}
								label="Nombre"
								error={errors.name ? true : false}
								helperText={errors.name ? errors.name.message : ""}
							/>
						)}
					/>
					<Controller
						name="lastName"
						control={control}
						render={({field}) => (
							<TextField
								{...field}
								label="Apellido"
								error={!!errors.lastName}
								helperText={errors.lastName ? errors.lastName.message : ""}
							/>
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({field}) => (
							<TextField
								{...field}
								label="Correo"
								error={!!errors.email}
								helperText={errors.email ? errors.email.message : ""}
							/>
						)}
					/>

					{/* Paso 2 Direccion*/}

					<FormControl fullWidth>
						<InputLabel>Pais</InputLabel>
						<Controller
							name="country"
							control={control}
							rules={{required: true}}
							defaultValue={""}
							render={({field}) => (
								<Select {...field} label="País">
									<MenuItem value="Argentina">Argentina</MenuItem>
									<MenuItem value="Chile">Chile</MenuItem>
									<MenuItem value="Perú">Perú</MenuItem>
									<MenuItem value="Colombia">Colombia</MenuItem>
									<MenuItem value="México">México</MenuItem>
									<MenuItem value="Venezuela">Venezuela</MenuItem>
									<MenuItem value="Uruguay">Uruguay</MenuItem>
								</Select>
							)}
						/>
					</FormControl>

					<Controller
						name="city"
						control={control}
						render={({field}) => (
							<TextField {...field} label="Ciudad" error={!!errors.city} />
						)}
					/>

					<Controller
						name="address"
						control={control}
						render={({field}) => (
							<TextField
								{...field}
								label="Dirección"
								error={!!errors.address}
								helperText={errors.address ? errors.address.message : ""}
							/>
						)}
					/>

					<Button type="submit" variant="contained" color="primary">
						Enviar
					</Button>
				</Paper>
			</form>
		</Container>
	);
};
