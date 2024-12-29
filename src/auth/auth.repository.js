const prisma = require('../db/index');

const createUser = async (data) => {
    return await prisma.users.create({
        data
    });
}

const getUsers = async () => {
    return await prisma.users.findMany();
}

const getUser = async (username, password) => {
    return await prisma.users.findFirst({
        where: {
            username,
            password
        }
    });
}

const getUserById = async (id) => {
    return await prisma.users.findUnique({
        where: {
            id
        }
    });
}

const updateUser = async (id, data) => {
    return await prisma.users.update({
        where: {
            id
        },
        data
    });
}

const deleteUser = async (id) => {
    return await prisma.users.delete({
        where: {
            id
        }
    });
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}