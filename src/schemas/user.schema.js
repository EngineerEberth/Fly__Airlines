import * as yup from "yup";

// Esquema de validación para registro de usuario
export const userSchema = yup.object({
    username: yup
        .string()
        .trim()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .required("El nombre de usuario es obligatorio"),
    email: yup
        .string()
        .email("El correo electrónico no es válido")
        .required("El correo electrónico es obligatorio"),
    password: yup
        .string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
});
 
// Esquema de validación solo para login 
export const loginSchema = yup.object({
    email: yup
        .string()
        .email("El correo electrónico no es válido")
        .required("El correo electrónico es obligatorio"),
    password: yup
        .string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
});
