import {StatusCodes} from "http-status-codes";

import userService from "../services/user.service";

const STATUS = {
    success: 'SUCCESS',
    failure: 'FAILED',
};


const updateUser = (req, res) => {

    const {body: user} = req;

    const id = parseInt(req.params.id, 10);

    const updateUser = userService.updateUser(id, user);

    if (updateUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: updateUser,
        })
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User with id ${id} not found`,
        })
    }
}

const addUser = (req, res) => {

    const {body: user} = req;

    const addedUser = userService.addUser(user);


    if (!user.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.failure,
            message: 'Name is required',
        })
    }

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser,
    });
}

const getAllUsers = (req, res) => {
    const users = userService.getAllUser();
    if (users.length){
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: users,
        })
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No users Found..',
    })
}

const getUserById = (req, res) => {

    const { body: user } = req;
    const id = parseInt(req.params.id, 10);

    const users = userService.getUser(id);

    if (users) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            data: users,
        });
    }else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User with id ${id} not available`,
        });
    }
}

const deleteUser = (req, res) => {

    const { body: user } = req;

    const id = parseInt(req.params.id, 10);

    const deleteUser = userService.removeUser(id);

    if (deleteUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User with id ${id} deleted successfully`,
        })
    }else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User with id ${id} not found`,
        })
    }
}
export default  {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,

}