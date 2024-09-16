import {checkSchema} from "express-validator";

export const getIceCreamValidator = checkSchema(

    {
        id: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The indicator must be a number'},
            isNumeric: {errorMessage: 'Must be a number'},
            errorMessage: 'The indicator must be a number'
        },
        flavor:{
            isAlpha: {errorMessage: 'just letters'},

            notEmpty: true,
            errorMessage: 'company required'
        },
        price: {
            matches: {options:  /^[0-9]+$/, errorMessage: 'The indicator must be a number'},
            isNumeric: {errorMessage: 'Must be a number'},
            errorMessage: 'The indicator must be a number'
        },
        company:{
            isAlpha: {errorMessage: 'just letters'},

            notEmpty: true,
            errorMessage: 'company required'
        },
        type:{
            isAlpha: {errorMessage: 'just letters'},

            notEmpty: true,
            errorMessage: 'company required'
        }
    }, ["params"]

);