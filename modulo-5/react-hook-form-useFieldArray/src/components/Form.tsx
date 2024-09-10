import { Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export const Form = () => {
	const methods = useForm({});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<Container sx={{width: "500px"}}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Typography variant="h4" component="h1">
					{methods.watch("name")}
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
