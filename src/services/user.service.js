import userDao from '../models/user.dao.js'


const getUser = (userId) => {
    return userDao.getUser(userId);
}

const getAllUser = () => {
   return userDao.getAllUser();
}

const addUser = (details) => {
  return userDao.insertUser(details);
};

const updateUser = (userId, details) => {
  return userDao.updateUser(userId, details);
};

const removeUser = (userId) => {
  return userDao.removeUser(userId);
};

export default {
    getUser,
    getAllUser,
    addUser,
    updateUser,
    removeUser,
}
 