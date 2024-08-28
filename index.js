const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    try {
        res.send('File uploaded successfully');
    } catch (err) {
        res.status(400).send('Error uploading file');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
