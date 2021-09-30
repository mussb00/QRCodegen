
let inputs = document.getElementsByClassName("inputs")
let cancelBtn = document.getElementById('cancel')
let createBtn = document.getElementById('create')
let badgeName = document.getElementById('badgeName')

cancelBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    for (input of inputs) {
        input.value = ""
    }
    badgeName.textContent = ""
    badgeEmail.textContent = ""
    badgeTwitter.textContent = ""
    badgeGithub.textContent = ""
})

createBtn.addEventListener('click', ()=>{
    // e.preventDefault();
    badgeName.textContent = inputs[0].value;
    badgeEmail.textContent = inputs[1].value;
    badgeTwitter.textContent = inputs[2].value;
    badgeGithub.textContent = inputs[3].value;
})