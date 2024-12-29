const authRepository = require('./auth.repository');

const registerUser = async (data) => {
    return await authRepository.createUser(data);
}

const getUsers = async () => {
    return await authRepository.getUsers();
}

const loginUser = async (username, password) => {
    return await authRepository.getUser(username, password);
}

const getUserById = async (id) => {
    if (typeof id !== "number" || isNaN(id)) {
        throw Error("Invalid ID");
    }
    const user = await authRepository.getUserById(id);
    if (!user) {
        throw Error("User not found");
    }
    return user;
}

const updateUser = async (id, data) => {
    await getUserById(id);
    return await authRepository.updateUser(id, data);
}

const deleteUser = async (id) => {
    await getUserById(id);
    await authRepository.deleteUser(id);
}

module.exports = {
    registerUser,
    getUsers,
    loginUser,
    getUserById,
    updateUser,
    deleteUser
}