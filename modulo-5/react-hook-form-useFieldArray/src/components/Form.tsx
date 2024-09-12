import { Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const shema = yup.object({
	receta: yup.string().required("El nombre de la receta es requerido"),
	ingredientes: yup.array().of(
		yup.object({
			nombre: yup.string().required("El nombre del ingrediente es requerido"),
		})
	)
})

export const Form = () => {
	const { control, handleSubmit, formState, watch } = useForm({
		defaultValues: {
			receta: "",
			ingredientes: [{ nombre: "" }],
		},
		resolver: yupResolver(shema),
	});
	const { fields, append, remove, prepend } = useFieldArray({
		control,
		name: "ingredientes",
	})

	const onSubmit = (data: any) => {
		console.log(data);
	};

	// console.log(watch("ingredientes"));

	return (
		<Container sx={{width: "600px"}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Typography variant="h5" component="h2">
					Formulario de recetas
				</Typography>
				<Paper
					sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
				>
					{/* Input nombre de la receta */}
					<Controller
						name="receta"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextField
								{...field}
								label="Nombre de la receta"
								variant="outlined"
								error={!!formState.errors.receta}
								helperText={formState.errors.receta?.message}
								fullWidth
							/>
						)}
					/>

					{/* Inputs dinamicos */}
					{fields.map((field, index) => (
						<Stack
							key={field.id}
							direction="row"
							spacing={2}
						>
							<Controller
								name={`ingredientes.${index}.nombre`}
								control={control}
								defaultValue=""
								render={({ field }) => (
									<TextField
										{...field}
										label="Ingrediente"
										variant="outlined"
										fullWidth
										error={!!formState.errors.ingredientes?.[index]?.nombre}
										helperText={formState.errors.ingredientes?.[index]?.nombre?.message}
									/>
								)}
							/>
							<Button
								variant="contained"
								onClick={() => remove(index)}
							>
								ELiminar
							</Button>
						</Stack>
					))}

					{/* button agregar y guardar */}
					<Button
						variant="outlined"
						fullWidth
						onClick={() => append({ nombre: "" })}
					>
						Agregar Ingrediente
					</Button>
					<Button
						type="submit"
						variant="contained"
						fullWidth
					>
						Guardar
					</Button>
					<Button
						variant="outlined"
						fullWidth
						onClick={() => prepend({ nombre: "" })}
					> 
						Agregar Ingrediente al inicio
					</Button>
				</Paper>
			</form>
		</Container>
	);
};
