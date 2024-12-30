import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import { userSchema } from "../schemas/user.schema.js"; // Esquema de validación
import { loginSchema } from "../schemas/user.schema.js"; 

// Registro de Usuario
export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Validación de los datos de entrada con Yup
    await userSchema.validate(req.body);  // Esto lanzará un error si los datos no son válidos

    // Hashear la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // Guardar el usuario en la base de datos
    const UserSaved = await newUser.save();

    // Crear el token de acceso
    const token = await createAccessToken({ id: UserSaved._id });

    // Enviar el token en una cookie
    res.cookie("token", token);

    // Responder con los datos del usuario guardado
    res.json({
      id: UserSaved._id,
      username: UserSaved.username,
      email: UserSaved.email,
      createdAt: UserSaved.createdAt,
      updatedAt: UserSaved.updatedAt,
    });
  } catch (error) {
    // Si hay un error, enviar respuesta con el error
    res.status(500).json({ message: error.message });
  }
};

// Iniciar sesión de Usuario
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validación de los datos de entrada con el esquema de login
    await loginSchema.validate(req.body);  

    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cerrar sesión de Usuario
export const logout = (req, res) => {
  // Limpiar el token de la cookie
  res.cookie("token", "", {
    expire: new Date(0),  // Esto elimina la cookie
  });

  // Enviar respuesta de éxito
  return res.sendStatus(200);
};

// Obtener el perfil de Usuario
export const profile = async (req, res) => {
  try {
    // Buscar el usuario por su ID (guardado en el token)
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "User not found" });

    // Responder con los datos del perfil del usuario
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    // En caso de error, responder con un mensaje de error
    res.status(500).json({ message: error.message });
  }
};
