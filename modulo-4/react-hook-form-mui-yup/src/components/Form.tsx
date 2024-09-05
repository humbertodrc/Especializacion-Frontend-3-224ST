import {Button, Container, Paper, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {InputField} from "./InputField";

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

					{/* <InputField control={control} name="name" label="Nombre" />

          {errors.name && <p>{errors.name.message}</p>} */}
					{/* {errors.name && (
						<Typography variant="caption" color="error">
							{errors.name?.message}
						</Typography>
					)} */}

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

					<Button type="submit" variant="contained" color="primary">
						Enviar
					</Button>
				</Paper>
			</form>
		</Container>
	);
};
