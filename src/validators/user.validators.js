import {checkSchema} from "express-validator";

export const getUserValidator = checkSchema(

    {
        username: {
            notEmpty: true,
            errorMessage: 'Username requerido',
        },
        password: {
            notEmpty: true,
            errorMessage: 'Contraseña requerida',
        }

    }, ["body"]

);

export const createUserValidator = checkSchema(

    {
        username: {
            notEmpty: true,
            errorMessage: 'Username requerido',
            matches: {
                options: /^[A-Za-z0-9]+$/,
                errorMessage: 'El username solo puede contener letras y números',
              }
        },
        password: {
            notEmpty: true,
            errorMessage: 'Contraseña requerida',
            matches: {
                options: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                errorMessage:
                  'La contraseña debe contener al menos 8 caracteres, incluyendo una letra y un número',
              }
        }

    }, ["body"]

);
