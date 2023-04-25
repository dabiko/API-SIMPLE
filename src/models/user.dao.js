import users from "./user.data.js";


const getAllUser = () => {
    return users;
}
const getUser = (userId) => {
    let findUser;
    findUser = users.find((user) => {
        if (user.id === userId) {
            return user
        }
        return null
    });

    return findUser;
};

const insertUser = (details) => {
    const newUser = { id: users.length + 1, ...details};
    users.push(newUser);
    return newUser;
}

const updateUser = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;
    users.map((user, index) => {
        if (user.id === userId){
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser){
        return null;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails,
    };

    users.splice(userIndex, 1, updatedUser)
    return updatedUser;
};

const removeUser = (userId) => {
    const deleteUser = (user, index) => {
      if (user.id === userId) {
          //remove the array element of the found user
        users.splice(index, 1);
        return true;
        }
        return false;
    };

    return users.find(deleteUser);
};

export default {
    getAllUser,
    getUser,
    insertUser,
    updateUser,
    removeUser,
};