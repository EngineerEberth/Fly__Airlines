import Piloto from "../models/pilot.model.js";

export const getPilotos = async (req, res) => {
    const pilotos = await Piloto.find({ user: req.user.id }).populate('user');
    res.json(pilotos);
};

export const createPiloto = async (req, res) => {
    const { nombre, licencia, rango, nacionalidad, horasVuelo, experiencia, estado } = req.body;
    const newPiloto = new Piloto({
        nombre,
        licencia,
        rango,
        nacionalidad,
        horasVuelo,
        experiencia,
        estado,
        user: req.user.id
    });
    const savedPiloto = await newPiloto.save();
    res.json(savedPiloto);
};

export const getPiloto = async (req, res) => {
    const piloto = await Piloto.findById(req.params.id).populate('user');
    if (!piloto) return res.status(404).json({ message: "Piloto not found" });
    res.json(piloto);
};

export const updatePiloto = async (req, res) => {
    const piloto = await Piloto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!piloto) return res.status(404).json({ message: "Piloto not found" });
    res.json(piloto);
};

export const deletePiloto = async (req, res) => {
    const piloto = await Piloto.findByIdAndDelete(req.params.id);
    if (!piloto) return res.status(404).json({ message: "Piloto not found" });
    res.sendStatus(204);
};
