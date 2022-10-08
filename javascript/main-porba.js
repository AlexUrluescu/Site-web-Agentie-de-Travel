
let butoane = document.querySelectorAll('.buton');

for(var i=0; i<butoane.length; i++){
    butoane[i].addEventListener('click', function(e){
        if(e.target == btn1){
            let zonaText = 'cardText';
            let zonaBtn = 'btnLoc';
            miscare(zonaText, zonaBtn);
        }

        else if(e.target == btn2){
            let zonaText = 'cardText2';
            let zonaBtn = 'btnLoc2';
            miscare(zonaText, zonaBtn);
        }
    })
}

function miscare(zonaText, zonaBtn){
    const cardText = document.getElementById(zonaText);
    const cardBtn = document.getElementById(zonaBtn);

    cardText.classList.toggle('culoare');
    cardBtn.classList.toggle('culoare-buton');

}

// -----------------------------------------------------------

let casute = document.querySelectorAll('.casuta');

for(let i=0; i<casute.length; i++){
    casute[i].addEventListener('click', (e)=>{
        if(e.target == avion){
            alert('Avion');
        }

        else if(e.target == tren){
            alert('Tren');
        }
    })
}




