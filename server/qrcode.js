const qrcode = require('qrcode')

const generateQR = async text => {
    try {
        // text can be a string or array, first argument is the path we want to store the qr code
        await qrcode.toFile('../client-side/image.png', text)
        } catch (err) {
        console.log(err)
    }
}

module.exports = generateQR