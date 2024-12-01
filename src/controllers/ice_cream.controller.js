import iceCreamModel from '../models/ice_cream_crud.model.js'

export async function getIceCreams (req, res) {

    const info = await iceCreamModel.getIceCreams()

    if(info.length === 0){
        return res.status(404).json({ message: 'No hay helados creados' });
    }

    res.status(200).json({
        sucess: true,
        message: "Helados obtenidos exitosamente",
        data: info
    })
}
export  async function createIceCream (req, res) {

    const {img, flavor, price, company, type} = req.body;

    const existingIceCreams = await iceCreamModel.getIceCreams();

    const iceCreamExists = existingIceCreams.some(iceCream =>
        iceCream.img === img &&
        iceCream.flavor === flavor &&
        iceCream.price === price &&
        iceCream.company === company &&
        iceCream.type === type
    );

    if (iceCreamExists) {
        return res.status(400).json({
            success: false,
            message: "El helado ya existe"
        });
    }

    const info = await iceCreamModel.createIceCream(img, flavor, price, company, type)

    res.status(200).json({
        sucess: true,
        message: "Helado creado exitosamente",
        data: info
    })
}
export async function updateIceCream (req, res) {

    const {id} = req.params;
    const {img, flavor, price, company, type} = req.body;

    const validateCreated = await iceCreamModel.getIceCreams();

    const info = await iceCreamModel.updateIceCream(id, img, flavor, price, company, type);

    if(validateCreated.length === 0){
        return res.status(404).json({ message: 'No hay helados creados' });
    }

    if (!info || info.length === 0) {
        return res.status(404).json({ message: 'Helado no encontrado' });
    }

    res.status(200).json({
        sucess: true,
        message: "Helado actualizado exitosamente",
        data: info
    })
}

export async function deleteIceCream (req, res) {

    const {id} = req.params;

    const validateCreated = await iceCreamModel.getIceCreams();

    const info = await iceCreamModel.deleteIceCream(id );

    if(validateCreated.length === 0){
        return res.status(404).json({ message: 'No hay helados creados' });
    }

    if(info.length === 0){
        return res.status(404).json({ message: 'Helado no encontrado' });
    }

    res.status(200).json({
        sucess: true,
        message: "Helado eliminado exitosamente",
        data: info
    })
}


export async function getIceCream(req, res){

    const {id} = req.params

    const validateCreated = await iceCreamModel.getIceCreams();

    const info = await iceCreamModel.getIceCream(id);

    if(validateCreated.length === 0){
        return res.status(404).json({ message: 'No hay helados creados' });
    }

    if(info.length === 0){
        return res.status(404).json({ message: 'Helado no encontrado' });
    }

    res.status(200).json({
        sucess: true,
        message: "Helado obtenido exitosamente",
         data: info
    })
}
