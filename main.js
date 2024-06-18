let qrcode = document.getElementById('qrcode');
let image = document.getElementById('image');

qrcode.addEventListener('input',  ()=>{
    image.setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrcode.value)
});