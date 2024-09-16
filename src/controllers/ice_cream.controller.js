import { ice_creams } from "../models/ice_cream.js";

export const getIceCreams = async (req, res) => {
    try {
        const iceCreamsAll = await ice_creams.findAll();
        res.json(iceCreamsAll);
    } catch (error) {
        return res.status(500).json({ message: error.nessage });
    }
};

export const createIceCream = async (req, res) => {
    try {
        console.log(req.body);
        const {
            flavor,
            price,
            company,
            type
        } = req.body;
        const newIceCream = await ice_creams.create({
            flavor,
            price,
            company,
            type
        });
        res.json(newIceCream);
    } catch (error) {
        return res.status(500).json({ message: error.nessage });
    }
};

export const getIceCream = async (req, res) => {
    const { id } = req.params;
    let iceCream;
    try {

        if(id){
            iceCream = await ice_creams.findOne({
                where: { id },
            });
        }
        res.json(iceCream);

    } catch (error) {
        return res.status(500).json({ message: error.nessage });
    }
};

export const updateIceCream = async (req, res) => {
    const { id } = req.params;
    const { flavor, price, company, type } = req.body;
    try {
        const iceCream = await ice_creams.findOne({
            where:{
                id
            }
        })
        if (!iceCream) {
            return res.status(404).json({ message: 'Ice cream doesnt exist' });
        }
        iceCream.flavor = flavor ?? iceCream.flavor;
        iceCream.price = price ?? iceCream.price;
        iceCream.company = company ?? iceCream.company;
        iceCream.type = type ?? iceCream.type;

    await iceCream.save();
    res.json({ message: 'Updated ice cream ', iceCream });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteIceCream = async (req, res) => {

}