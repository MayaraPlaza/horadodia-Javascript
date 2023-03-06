function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#bf9c7c'
        
    } else if (hora >= 12 && hora < 18 ) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#865222'
    } else {
        img.src = 'jantar.jpg'
        document.body.style.background = '#631606'
    }
}

