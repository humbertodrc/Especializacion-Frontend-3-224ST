import { TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"

export default function PersonalDataForm() {

  const { control, formState: { errors } } = useFormContext();
  
  console.log(errors);

	return (
		<>
			<Controller
				name="name"
				control={control}
				render={({field}) => (
					<TextField
						{...field}
						label="Nombre"
            error={errors.name ? true : false}
            focused
						// helperText={errors.name ? errors.name.message : ""}
					/>
				)}
      />

      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="name" />
			</Typography>
      
			<Controller
				name="lastName"
				control={control}
				render={({field}) => (
					<TextField
						{...field}
						label="Apellido"
						error={!!errors.lastName}
						// helperText={errors.lastName ? errors.lastName.message : ""}
					/>
				)}
      />
      
      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="lastName" />
			</Typography>

			<Controller
				name="email"
				control={control}
				render={({field}) => (
					<TextField
						{...field}
						label="Correo"
						error={!!errors.email}
						// helperText={errors.email ? errors.email.message : ""}
					/>
				)}
      />
      
      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="email" />
			</Typography>
		</>
	);
}
