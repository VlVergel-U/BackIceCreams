import {checkSchema} from "express-validator";

export const getIceCreamValidator = checkSchema(

    {
        id: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'El id debe ser un número'},
        },

    }, ["params"]

);

export const deleteIceCreamValidator = checkSchema(

    {
        id: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'El id debe ser un número'},
        },

    }, ["params"]

);


export const createIceCreamValidator = checkSchema(

    {
        img: {
            notEmpty: {
                errorMessage: 'La URL de la imagen es requerida',
            },
            isURL: {
                options: {
                    protocols: ['http', 'https'],
                    require_protocol: true,
                    require_valid_protocol: true,
                },
                errorMessage: 'Debe ser una URL válida que comience con http o https',
            },
            custom: {
                options: (value) => {
                    const validExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
                    const maxLength = 2048;
                    const hasValidExtension = validExtensions.some((ext) =>
                        value.toLowerCase().endsWith(ext)
                    );
                    return value.length <= maxLength && hasValidExtension;
                },
                errorMessage: 'La URL debe terminar en .png, .jpg, .jpeg o .gif',
            },
        },

        flavor:{
            isAlpha: {errorMessage: 'Sólo letras'},
            notEmpty: true,
            errorMessage: 'Sabor requerido',
            custom: {
                options: (value) => {
                  const validTypes = ['vainilla', 'chocolate']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Tipo inválido, los tipos que se puede usar son: vainilla, chocolate'
              },
        },
        price: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'El precio debe ser numérico'},
            notEmpty: true,
            errorMessage: 'Precio requerido',
            isFloat: {
                options: { min: 1000, max: 200000 },
                errorMessage: 'El precio debe estar entre 1000 y 200,000 COP'
              },
        },
        company:{
            isAlpha: {errorMessage: 'Sólo letras'},
            notEmpty: true,
            errorMessage: 'Empresa requerida',
            custom: {
                options: (value) => {
                  const validTypes = ['cremhelado', 'popsy']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Tipo inválido, los tipos que se puede usar son: cremhelado, popsy'
              },
        },
        type:{
            isAlpha: {errorMessage: 'Sólo letras'},
            notEmpty: true,
            errorMessage: 'Tipo requerido',
            custom: {
                options: (value) => {
                  const validTypes = ['cono', 'vaso']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Tipo inválido, los tipos que se puede usar son: cono, vaso'
              },
        }
    }, ["body"]

);

export const updateIceCreamValidator = checkSchema(

    {
        id: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'El id debe ser un número'},
        },
        img: {
          notEmpty: {
              errorMessage: 'La URL de la imagen es requerida',
          },
          isURL: {
              options: {
                  protocols: ['http', 'https'],
                  require_protocol: true,
                  require_valid_protocol: true,
              },
              errorMessage: 'Debe ser una URL válida que comience con http o https',
          },
          custom: {
              options: (value) => {
                  const validExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
                  const maxLength = 2048;
                  const hasValidExtension = validExtensions.some((ext) =>
                      value.toLowerCase().endsWith(ext)
                  );
                  return value.length <= maxLength && hasValidExtension;
              },
              errorMessage: 'La URL debe terminar en .png, .jpg, .jpeg o .gif',
          },
      },
        flavor:{
            isAlpha: {errorMessage: 'Sólo letras'},
            notEmpty: true,
            errorMessage: 'Sabor requerido',
            custom: {
                options: (value) => {
                  const validTypes = ['vainilla', 'chocolate']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Tipo inválido, los tipos que se puede usar son: vainilla, chocolate'
              },
        },
        price: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The price must be a number'},
            notEmpty: true,
            errorMessage: 'Precio requerido',
            isFloat: {
                options: { min: 1000, max: 200000 },
                errorMessage: 'Price must be between 1000 and 200,000 COP'
              },
        },
        company:{
            isAlpha: {errorMessage: 'Sólo letras'},
            notEmpty: true,
            errorMessage: 'Empresa requerida',
            custom: {
                options: (value) => {
                  const validTypes = ['cremhelado', 'popsy']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Tipo inválido, los tipos que se puede usar son: cremhelado, popsy'
              },
        },
        type:{
            isAlpha: {errorMessage: 'Sólo letras'},
            notEmpty: true,
            errorMessage: 'Tipo requerido',
            custom: {
                options: (value) => {
                  const validTypes = ['cono', 'vaso']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Tipo inválido, los tipos que se puede usar son: cono, vaso'
              },
        }
    }, ["body", "params"]

);