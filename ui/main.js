console.log('Loaded!');
//change the text of the main.text div
var element = document.getElementbyId('main-text');

element.innerHTML = 'New value';

//Move the image
var img = document.getElementbyId('madi');
img onclick = function() {
    var interval = setInterval(moveleft, 100);
    img.style.marginLeft = '10px';
    };

    
    
