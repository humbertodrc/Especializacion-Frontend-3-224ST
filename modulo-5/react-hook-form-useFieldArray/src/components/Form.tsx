import { Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export const Form = () => {
	const { control, register, handleSubmit, formState, setValue, getValues } = useForm({});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<Container sx={{width: "500px"}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h4" component="h1">
					Formulario con useFieldArray
				</Typography>
				<Paper
					sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
				>
					{/* Inputs */}
				</Paper>
			</form>
		</Container>
	);
};
