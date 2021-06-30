const sharp = require('sharp');

sharp('logo.png')
    .resize(1000)
    .toFile('resized.png');