import destiny from "../models/destiny.model.js";

export const getDestinos = async (req, res) => {
    const destinos = await destiny.find({
        user: req.user.id
    }).populate('user');
    res.json(destinos);
};

export const createDestino = async (req, res) => {
    const { nombre, codigoIATA, pais, continente, descripcion, estado } = req.body;
    console.log(req.user);
    const newDestino = new destiny({
        nombre,
        codigoIATA,
        pais,
        continente,
        descripcion,
        estado,
        user: req.user.id
    });
    const savedDestino = await newDestino.save();
    res.json(savedDestino);
};

export const getDestino = async (req, res) => {
    const destino = await destiny.findById(req.params.id).populate('user');
    if (!destino) return res.status(404).json({ message: "Destiny not found" });
    res.json(destino);
};

export const updateDestino = async (req, res) => {
    const destino = await destiny.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!destino) return res.status(404).json({ message: "Destiny not found" });
    res.json(destino); 
};

export const deleteDestino = async (req, res) => {
    const destino = await destiny.findByIdAndDelete(req.params.id);
    if (!destino) return res.status(404).json({ message: "Destiny not found" });
    return res.sendStatus(204);
};
