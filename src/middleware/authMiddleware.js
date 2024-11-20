const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JTW_SECRET);
        req.user = decoded;
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }

}

module.exports = authMiddleware;