
let indexImg = 0;

let images = document.querySelectorAll('img');

document.querySelectorAll('.img-container img').forEach(img =>{
    img.onclick = () =>{
        indexImg = getIndex(img.src);
        setImage();
    }
} );

document.querySelector('.pop-up span').onclick = () =>{
    document.querySelector('.pop-up').style.display = 'none';
}

document.getElementById('next').onclick = () => {
    indexImg++;
    if(indexImg >= images.length - 1){
        indexImg = 0;
    }
    setImage()
}
document.getElementById('prev').onclick = () => {
    indexImg--;
    if(indexImg <= 0){
        indexImg = images.length - 1;
    }
    setImage();
}

function setImage(){
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.pop-up img').src = images[indexImg].src;
}


function getIndex(imageurl){
    let index = 0;
    for(i = 0; i <= images.length - 1; i++ ){
        if(images[i].src == imageurl){
            index = i;
            break;
        }
    }
    return index;
}



