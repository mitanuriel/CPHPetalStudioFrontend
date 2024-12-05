const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5500' // Replace with your frontend's origin
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve 'home.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Route to serve 'user-dashboard.html'
app.get('/user-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'user-dashboard.html'));
});

// Route to serve 'admin-dashboard.html'
app.get('/admin-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-dashboard.html'));
});

// Route to serve 'view.html' for '/bouquets/view' path
app.get('/bouquets/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bouquets', 'view.html'));
});

// User data
const users = [
    { username: 'user', password: 'password', role: 'user', token: 'user-token' },
    { username: 'admin', password: 'password', role: 'admin', token: 'admin-token' }
];

// Login route
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ token: user.token, role: user.role });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});