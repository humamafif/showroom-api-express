const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
// const authMiddleware = require('./middleware/authMiddleware');

// Middleware
app.use(express.json());  // Untuk parsing JSON
app.use(cors());          // Mengaktifkan CORS (agar bisa all platform)
// app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("tes")
});

const carController = require('./car/car.controller');
app.use('/cars', carController);

const paymentController = require('./payment/payment.controller');
app.use('/payments', paymentController);

const userController = require('./user/user.controller');
app.use('/users', userController);

// untuk error handling
// app.use((err, req, res, next) => {
//   let statusCode = 500;
//   let message = "Internal Server Error";

//   if (err.message === "Car not found" || err.message === "Brand not found" || err.message === "Payment not found" || err.message === "Type not found") {
//     statusCode = 404;
//     message = err.message;
//   } else if (err.message === "Inavlid ID") {
//     statusCode = 400;
//     message = err.message;
//   }

//   res.status(statusCode).json({ error: true, message, statusCode });
// });
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});