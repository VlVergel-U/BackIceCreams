import { ice_creams } from "../models/ice_cream.model.js"; 

export const createIceCreams = async () => {
    try {
        const iceCreams = [
            {
                img: 'https://cuisinart.com.co/cdn/shop/articles/Helado_de_Fresa_Casero.jpg',
                flavor: 'Fresa',
                price: 80000,
                company: 'CremHelado',
                type: 'Cono'
            },
            {
                img: 'https://www.recetasnestle.com.do/sites/default/files/srh_recipes/62099096785a3c939a1a1eefb06bf358.jpg',
                flavor: 'Vainilla',
                price: 7500,
                company: 'Popsy',
                type: 'Vaso'
            },
            {
                img: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/07/08/5f05a10688644.jpeg',
                flavor: 'Chocolate',
                price: 9000,
                company: 'CremHelado',
                type: 'Cono'
            },
            {
                img: 'https://imag.bonviveur.com/helado-de-coco.jpg',
                flavor: 'Coco',
                price: 9500,
                company: 'Popsy',
                type: 'Vaso'
            },
            {
                img: 'https://www.eis-perfecto.de/wp-content/uploads/2021/01/bubbel-gum-eis-848x477.jpg',
                flavor: 'Chicle',
                price: 8500,
                company: 'CremHelado',
                type: 'Cono'
            }
        ];
        let iceCreamsCreated = false;

        for (const iceCream of iceCreams) {
            const { img, flavor, price, company, type } = iceCream;
            const iceCreamCreated = await ice_creams.findOne({ where: { img, flavor, price, company, type } });

            if (!iceCreamCreated) {
                await ice_creams.create({ img, flavor, price, company, type });
            } else {
                iceCreamsCreated = true;
            }
        }

        if (iceCreamsCreated){
            console.log("Helados ya creados anteriormente :)");
        } else {
            console.log("Helados creados :)");

        }

    } catch (error) {
        console.error('Error al crear helados:', error);
    }
};