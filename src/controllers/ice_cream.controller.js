import iceCreamModel from '../models/ice_cream_crud.model.js'

export async function getIceCreams (req, res) {

    const info = await iceCreamModel.getIceCreams()

    if(info.length === 0){
        return res.status(404).json({ message: 'No ice creams created' });
    }

    res.status(200).json({
        sucess: true,
        data: info
    })
}
export  async function createIceCream (req, res) {

    const {flavor, price, company, type} = req.body;

    const info = await iceCreamModel.createIceCream(flavor, price, company, type)

    res.status(200).json({
        sucess: true,
        data: info
    })
}
export async function updateIceCream (req, res) {

    const {id} = req.params;
    const {flavor, price, company, type} = req.body;

    const validateCreated = await iceCreamModel.getIceCreams();

    const info = await iceCreamModel.updateIceCream(id, flavor, price, company, type);

    if(validateCreated.length === 0){
        return res.status(404).json({ message: 'No ice creams created' });
    }

    if(info.length === 0){
        return res.status(404).json({ message: 'Ice cream not found' });
    }

    res.status(200).json({
        sucess: true,
        data: info
    })
}
export async function deleteIceCream (req, res) {

    const {id} = req.params;

    const validateCreated = await iceCreamModel.getIceCreams();

    const info = await iceCreamModel.deleteIceCream(id );

    if(validateCreated.length === 0){
        return res.status(404).json({ message: 'No ice creams created' });
    }

    if(info.length === 0){
        return res.status(404).json({ message: 'Ice cream not found' });
    }

    res.status(200).json({
        sucess: true,
        data: info
    })
}


export async function getIceCream(req, res){

    const {id} = req.params

    const validateCreated = await iceCreamModel.getIceCreams();

    const info = await iceCreamModel.getIceCream(id);

    if(validateCreated.length === 0){
        return res.status(404).json({ message: 'No ice creams created' });
    }

    if(info.length === 0){
        return res.status(404).json({ message: 'Ice cream not found' });
    }

    res.status(200).json({
        sucess: true,
         data: info
    })
}
