import {schema} from "@/schema";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Container, Paper, Typography} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";
import AddressDataForm from "./AddressDataForm";
import PersonalDataForm from "./PersonalDataForm";
import { useEffect } from "react";

interface FormValues {
	name: string;
	lastName: string;
	email: string;
	country: string;
	city: string;
	address: string;
}

export const Form = () => {
	const methods = useForm<FormValues>({
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
		methods.reset();
	};

	// useEffect(() => {
	// 	methods.setFocus("name");
	// }, [])

	return (
		<Container sx={{width: "500px"}}>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<Typography variant="h4" component="h1">
						{methods.watch("name")}
					</Typography>
					<Paper
						sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
					>
						{/* Paso 1 Datos personales */}
						<PersonalDataForm />

						{/* Paso 2 Direccion*/}
						<AddressDataForm />

						<Button type="submit" variant="contained" color="primary">
							Enviar
						</Button>
					</Paper>
				</form>
			</FormProvider>
		</Container>
	);
};
