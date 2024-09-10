import * as yup from "yup";

export const schema = yup.object({
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