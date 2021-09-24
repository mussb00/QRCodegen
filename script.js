let inputs = document.getElementsByClassName("inputs")
let cancelBtn = document.getElementById('cancel')
let createBtn = document.getElementById('create')
let badgeName = document.getElementById('badgeName')

var typeNumber = 4;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('Hi!');
qr.make();
document.getElementById('placeHolder').innerHTML = qr.createImgTag();

cancelBtn.addEventListener('click', (e)=>{
    // e.preventDefault();
    for (input of inputs) {
        input.value = ""
    }
    for (let i=0; i<inputs.length; i++){
        badgeName.textContent = ""
    }
})

createBtn.addEventListener('click', ()=>{
    // e.preventDefault();
    badgeName.textContent = inputs[0].value;
    badgeEmail.textContent = inputs[1].value;
    badgeTwitter.textContent = inputs[2].value;
    badgeGithub.textContent = inputs[3].value;
})