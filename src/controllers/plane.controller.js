import Avion from "../models/plane.model.js";

export const getAviones = async (req, res) => {
    const aviones = await Avion.find({ user: req.user.id }).populate('user');
    res.json(aviones);
};

export const createAvion = async (req, res) => {
    const { matricula, modelo, fabricante, capacidadPasajeros, capacidadCargaKg, anoFabricacion, estado } = req.body;
    const newAvion = new Avion({
        matricula,
        modelo,
        fabricante,
        capacidadPasajeros,
        capacidadCargaKg,
        anoFabricacion,
        estado,
        user: req.user.id
    });
    const savedAvion = await newAvion.save();
    res.json(savedAvion);
};

export const getAvion = async (req, res) => {
    const avion = await Avion.findById(req.params.id).populate('user');
    if (!avion) return res.status(404).json({ message: "Avion not found" });
    res.json(avion);
};

export const updateAvion = async (req, res) => {
    const avion = await Avion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!avion) return res.status(404).json({ message: "Avion not found" });
    res.json(avion);
};

export const deleteAvion = async (req, res) => {
    const avion = await Avion.findByIdAndDelete(req.params.id);
    if (!avion) return res.status(404).json({ message: "Avion not found" });
    res.sendStatus(204);
};
