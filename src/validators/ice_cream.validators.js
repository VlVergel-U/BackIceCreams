import {checkSchema} from "express-validator";

export const getIceCreamValidator = checkSchema(

    {
        id: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The id must be a number'},
        },

    }, ["params"]

);

export const deleteIceCreamValidator = checkSchema(

    {
        id: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The id must be a number'},
        },

    }, ["params"]

);


export const createIceCreamValidator = checkSchema(

    {
        flavor:{
            isAlpha: {errorMessage: 'just letters'},
            notEmpty: true,
            errorMessage: 'flavor required',
            custom: {
                options: (value) => {
                  const validTypes = ['vainilla', 'chocolate']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Invalid type. Allowed types: vainilla, chocolate'
              },
        },
        price: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The price must be a number'},
            notEmpty: true,
            errorMessage: 'price required',
            isFloat: {
                options: { min: 1000, max: 200000 },
                errorMessage: 'Price must be between 1000 and 200,000 COP'
              },
        },
        company:{
            isAlpha: {errorMessage: 'just letters'},
            notEmpty: true,
            errorMessage: 'company required',
            custom: {
                options: (value) => {
                  const validTypes = ['cremhelado', 'popsy']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Invalid type. Allowed types: cremhelado, popsy'
              },
        },
        type:{
            isAlpha: {errorMessage: 'just letters'},
            notEmpty: true,
            errorMessage: 'type required',
            custom: {
                options: (value) => {
                  const validTypes = ['cono', 'vaso']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Invalid type. Allowed types: cono, vaso'
              },
        }
    }, ["body"]

);

export const updateIceCreamValidator = checkSchema(

    {
        id: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The id must be a number'},
        },
        flavor:{
            isAlpha: {errorMessage: 'just letters'},
            notEmpty: true,
            errorMessage: 'flavor required',
            custom: {
                options: (value) => {
                  const validTypes = ['vainilla', 'chocolate']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Invalid type. Allowed types: vainilla, chocolate'
              },
        },
        price: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The price must be a number'},
            notEmpty: true,
            errorMessage: 'price required',
            isFloat: {
                options: { min: 1000, max: 200000 },
                errorMessage: 'Price must be between 1000 and 200,000 COP'
              },
        },
        company:{
            isAlpha: {errorMessage: 'just letters'},
            notEmpty: true,
            errorMessage: 'company required',
            custom: {
                options: (value) => {
                  const validTypes = ['cremhelado', 'popsy']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Invalid type. Allowed types: cremhelado, popsy'
              },
        },
        type:{
            isAlpha: {errorMessage: 'just letters'},
            notEmpty: true,
            errorMessage: 'type required',
            custom: {
                options: (value) => {
                  const validTypes = ['cono', 'vaso']; 
                  return validTypes.includes(value.toLowerCase()); 
                },
                errorMessage: 'Invalid type. Allowed types: cono, vaso'
              },
        }
    }, ["body", "params"]

);