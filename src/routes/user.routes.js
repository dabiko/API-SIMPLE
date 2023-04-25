import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware'


import {
    addUserSchemaValidator,
    updateUserSchemaValidator,
    getUserSchemaValidator,
    deleteUserSchemaValidator,
} from '../schema/user.schema.js';
import userService from '../services/user.service.js'
import userController from '../controllers/user.controllers'

const router = express.Router();

router.post('/',
    expressYupMiddleware({
        schemaValidator: addUserSchemaValidator,
        expectedStatusCode: StatusCodes.BAD_REQUEST,
    }),
    userController.addUser
);

router.get('/all', userController.getAllUsers);

router.get('/:id', expressYupMiddleware({
        schemaValidator: getUserSchemaValidator,
        expectedStatusCode: StatusCodes.BAD_REQUEST,
    }),
    userController.getUserById);

router.put('/:id', expressYupMiddleware({
        schemaValidator: updateUserSchemaValidator,
        expectedStatusCode: StatusCodes.BAD_REQUEST,
    }),
    userController.updateUser,

);

router.delete('/:id',expressYupMiddleware({
        schemaValidator: deleteUserSchemaValidator,
        expectedStatusCode: StatusCodes.BAD_REQUEST,
    }),
    userController.deleteUser);

export default router;
