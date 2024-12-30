import Usuario from "../models/client.model.js";

export const getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find().populate('user');
    res.json(usuarios);
};

export const createUsuario = async (req, res) => {
    const { nombreCompleto, email, telefono, fechaNacimiento, numeroPasaporte, nacionalidad, estado } = req.body;
    const newUsuario = new Usuario({
        nombreCompleto,
        email,
        telefono,
        fechaNacimiento,
        numeroPasaporte,
        nacionalidad,
        estado,
        user: req.user.id
    });
    const savedUsuario = await newUsuario.save();
    res.json(savedUsuario);
};

export const getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ message: "Usuario not found" });
    res.json(usuario);
};

export const updateUsuario = async (req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) return res.status(404).json({ message: "Usuario not found" });
    res.json(usuario);
};

export const deleteUsuario = async (req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) return res.status(404).json({ message: "Usuario not found" });
    res.sendStatus(204);
};
