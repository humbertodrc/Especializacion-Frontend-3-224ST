import { ErrorMessage } from "@hookform/error-message";
import { FormControl, InputLabel, Select, MenuItem, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function AddressDataForm() {

  const {control, formState: {errors}, getValues } = useFormContext();
	return (
		<>
			<FormControl fullWidth>
				<InputLabel>Pais</InputLabel>
				<Controller
					name="country"
					control={control}
					defaultValue={""}
					render={({field}) => (
            <Select
              {...field}
              label="País"
              error={!!errors.country}
            >
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

      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="country" />
			</Typography>

			<Controller
				name="city"
				control={control}
				render={({field}) => (
					<TextField {...field} label="Ciudad" error={!!errors.city} />
				)}
      />
      
      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="city" />
			</Typography>

			<Controller
				name="address"
				control={control}
				render={({field}) => (
					<TextField
						{...field}
						label="Dirección"
						error={!!errors.address}
						// helperText={errors.address ? errors.address.message : ""}
					/>
				)}
      />
      
      <Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="address" />
      </Typography>
      

      <Typography variant="h4" component="h1">
        {getValues("name")}
      </Typography>
		</>
	);
}
