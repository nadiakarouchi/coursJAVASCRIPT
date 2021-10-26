
// page setInterval 

// js setInterval(() 

let  varImg = 0;
console.log(typeof varImg, varImg);//initialisation de la variable pour l'image


let timer = window.setInterval('monDiaporama()', 3000);
// initialisation de timer avec setInterval ('nomdelafonction(), temps en milliseconde').
console.log(typeof timer, timer);

let getAttrImg = document.getElementById('imgDiapo1').getAttribute('src');
console.log(typeof getAttrImg, getAttrImg);

function monDiaporama() {
    varImg +=1; //on incrémente et on affecte 1
    imgDiapo1.setAttribute('src', 'img/' + varImg + '.jpg');
    console.log('la varImg = ' + varImg);
    if(varImg == 6) {
        clearInterval(timer);
    }
}