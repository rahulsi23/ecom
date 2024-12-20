require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db'); // Adjust the path if needed
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const app = express();

// Connect to MongoDB
connectDB();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests only from this origin
  // origin: '*', // Allow requests only from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
  credentials: true, // Allow cookies to be sent along with requests
}));
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json());
app.use("/public", express.static("public"));
app.use('/api/users', userRoutes);
// app.use('/api/login', userRoutes);

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 4050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
