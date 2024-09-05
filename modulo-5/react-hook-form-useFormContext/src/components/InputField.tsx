import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  control: Control<any>
 }

export const InputField = ({control, name, label}: InputFieldProps) => {
	return (
		<Controller
			name="name"
			control={control}
			render={({field}) => (
				<TextField
					{...field}
					label="Nombre"
				/>
			)}
		/>
	);
};
