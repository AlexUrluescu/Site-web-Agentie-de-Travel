
// ------------- menu dinamic ----------------

const btn_apare_menu = document.getElementById('btn-menu--intrare');
const btn_dispare_menu = document.getElementById('btn-menu--iesire');

const menu = document.querySelector('.navigatie');

btn_apare_menu.addEventListener('click', () =>{
    menu.classList.add('navigatie--aparitie');
    btn_apare_menu.style.display = 'none';
    btn_dispare_menu.style.display = 'block';
});

btn_dispare_menu.addEventListener('click', () =>{
    menu.classList.remove('navigatie--aparitie');
    btn_apare_menu.style.display = 'block';
    btn_dispare_menu.style.display = 'none';
});

// ---------- final menu dinamic ---------------

// ---------- galerie imagini contenedor 1 -----------

const slider = document.querySelector('.poze-all1');
let poze = document.querySelectorAll('.casuta1-poza');
let pozaLast = poze[poze.length - 1];

const btn1Stanga = document.getElementById('btn1-stanga');
const btn1Dreapta = document.getElementById('btn1-dreapta');

slider.insertAdjacentElement('afterbegin', pozaLast);

btn1Dreapta.addEventListener('click', function(){
    let pozaFirst = document.querySelectorAll('.casuta1-poza')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all .4s';

    setTimeout(function(){
        slider.style.marginLeft = '-100%';
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', pozaFirst);
    },400)
});

btn1Stanga.addEventListener('click', function(){
    let poze = document.querySelectorAll('.casuta1-poza');
    let pozaLast = poze[poze.length - 1];

    slider.style.marginLeft = '0%';
    slider.style.transition = 'all .4s';

    setTimeout(function(){
        slider.style.marginLeft = '-100%';
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', pozaLast);
    },400)
});

// ---------- final galerie contenedor 1 -----------

// ----------------------------------------


let butoane_cont2 = document.querySelectorAll('.btn-cont2');

for(var i=0; i<butoane_cont2.length; i++){
    butoane_cont2[i].addEventListener('click', function(e){
        if(e.target == btn_contenedor2){
            let locatieMove = 'casutaMove1';
            let locatieMove2 = 'casutaMove2';
            let locatieMove3 = 'casutaMove3';
           
            let locatieCard2 = 'casutaText2';
            let locatieCard3 = 'casutaText3';

            let locatieButon = 'btn_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);

        }

        else if(e.target == btn2_contenedor2){
            let locatieMove = 'casutaMove2';
            let locatieMove2 = 'casutaMove1';
            let locatieMove3 = 'casutaMove3';

            let locatieCard2 = 'casutaText1';
            let locatieCard3 = 'casutaText3';

            let locatieButon = 'btn2_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);
        }

        else if(e.target == btn3_contenedor2){
            let locatieMove = 'casutaMove3';
            let locatieMove2 = 'casutaMove1';
            let locatieMove3 = 'casutaMove2';

            let locatieCard2 = 'casutaText1';
            let locatieCard3 = 'casutaText2';

            let locatieButon = 'btn3_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);
        }

        else if(e.target == btn4_contenedor2){
            let locatieMove = 'casutaMove4';
            let locatieMove2 = 'casutaMove5';
            let locatieMove3 = 'casutaMove6';

            let locatieCard2 = 'casutaText5';
            let locatieCard3 = 'casutaText6';

            let locatieButon = 'btn4_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);

            
        }

        else if(e.target == btn5_contenedor2){
            let locatieMove = 'casutaMove5';
            let locatieMove2 = 'casutaMove4';
            let locatieMove3 = 'casutaMove6';

            let locatieCard2 = 'casutaText4';
            let locatieCard3 = 'casutaText6';

            let locatieButon = 'btn5_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);

        }

        else if(e.target == btn6_contenedor2){
            let locatieMove = 'casutaMove6';
            let locatieMove2 = 'casutaMove4';
            let locatieMove3 = 'casutaMove5';

            let locatieCard2 = 'casutaText4';
            let locatieCard3 = 'casutaText5';

            let locatieButon = 'btn6_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);
            
        }

        else if(e.target == btn7_contenedor2){
            let locatieMove = 'casutaMove7';
            let locatieMove2 = 'casutaMove8';
            let locatieMove3 = 'casutaMove9';

            let locatieCard2 = 'casutaText8';
            let locatieCard3 = 'casutaText9';

            let locatieButon = 'btn7_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);
            
        }

        else if(e.target == btn8_contenedor2){
            let locatieMove = 'casutaMove8';
            let locatieMove2 = 'casutaMove7';
            let locatieMove3 = 'casutaMove9';

            let locatieCard2 = 'casutaText7';
            let locatieCard3 = 'casutaText9';

            let locatieButon = 'btn8_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);
            
        }

        else if(e.target == btn9_contenedor2){
            let locatieMove = 'casutaMove9';
            let locatieMove2 = 'casutaMove8';
            let locatieMove3 = 'casutaMove7';

            let locatieCard2 = 'casutaText7';
            let locatieCard3 = 'casutaText8';

            let locatieButon = 'btn9_contenedor2';

            aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon);
            
        }
    });


}

function aparitie(locatieMove, locatieMove2, locatieMove3, locatieCard2, locatieCard3, locatieButon){

    if(window.innerWidth > 1200){
        let casutaMove = document.getElementById(locatieMove);
        casutaMove.classList.toggle('casuta-move--aparitie');

        let casutaMove2 = document.getElementById(locatieMove2);
        casutaMove2.classList.remove('casuta-move--aparitie');

        let casutaMove3 = document.getElementById(locatieMove3);
        casutaMove3.classList.remove('casuta-move--aparitie');

        const card2 = document.getElementById(locatieCard2);
        card2.classList.toggle('casuta--micsorare');

        const card3 = document.getElementById(locatieCard3);
        card3.classList.toggle('casuta--micsorare');

        const buton = document.getElementById(locatieButon);

        let widthCasuta2 = casutaMove.clientWidth;
        if(widthCasuta2 > 0){
            buton.setAttribute('value', 'Mai mult')
        }
            
        else if(widthCasuta2 == 0){
            buton.setAttribute('value', 'Inapoi');
        }
    }

    else if(window.innerWidth < 1200){

        let casutaMove = document.getElementById(locatieMove);
        casutaMove.classList.toggle('aparitie--verticala');

        const buton = document.getElementById(locatieButon);
        let heightCasuta2 = casutaMove.clientHeight;

        if(heightCasuta2 > 0){
            buton.setAttribute('value', 'Mai mult')
        }
            
        else if(heightCasuta2 == 0){
            buton.setAttribute('value', 'Inapoi');
        }

        
        
    }

}


// ------------- galerie contenedor 2 --------------------

const btn2Stanga = document.getElementById('btn2-stanga');
const btn2Dreapta = document.getElementById('btn2-dreapta');

const slider2 = document.querySelector('.contenedor2-all-casute');
let casute = document.querySelectorAll('.casuta-all');
let casutaLast = casute[casute.length - 1];

btn2Dreapta.addEventListener('click', function(){
    let casutaFirst = document.querySelectorAll('.casuta-all')[0];
    slider2.style.marginLeft = '-200%';
    slider2.style.transition = 'all .4s';

    setTimeout(function(){
        slider2.style.marginLeft = '-100%';
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('beforeend', casutaFirst);
    }, 400)
})

btn2Stanga.addEventListener('click', function(){
    let casute = document.querySelectorAll('.casuta-all');
    let casutaLast = casute[casute.length - 1];

    slider2.style.marginLeft = '0%';
    slider2.style.transition = 'all .4s';

    setTimeout(function(){
        slider2.style.marginLeft = '-100%';
        slider2.style.transition = 'none';
        slider2.insertAdjacentElement('afterbegin', casutaLast);
    },400)
})

// ------------- final galerie contenedor 2 ------------------------

// ---------------- Contenedor 3 casute info ----------------------

const casuta3Move = document.getElementById('casuta3MoveID');
const btnCasuta3Move = document.getElementById('btnCasuta3Move');

const casutaAvion = document.getElementById('casuta3InfoAvion');
const casutaTren = document.getElementById('casuta3InfoTren');
const casutaAutocar = document.getElementById('casuta3InfoAutocar');

let casute3 = document.querySelectorAll('.contenedor3-casuta');

for(let i=0; i<casute3.length; i++){
    casute3[i].addEventListener('click', function(e){
        if(e.target == avionID){
            casuta3Move.classList.add('casuta3Move--aparitie');
            casutaAvion.classList.add('casuta3Move--aparitie');

            casutaAutocar.classList.remove('casuta3Move--aparitie');
            casutaTren.classList.remove('casuta3Move--aparitie');

        }

        else if(e.target == autocarID){
            casutaAutocar.classList.add('casuta3Move--aparitie');
            casuta3Move.classList.add('casuta3Move--aparitie');

            casutaAvion.classList.remove('casuta3Move--aparitie');
            casutaTren.classList.remove('casuta3Move--aparitie');
        }

        else if(e.target == trenID){
            casutaTren.classList.add('casuta3Move--aparitie');
            casuta3Move.classList.add('casuta3Move--aparitie');

            casutaAvion.classList.remove('casuta3Move--aparitie');
            casutaAutocar.classList.remove('casuta3Move--aparitie');
        }
    })
}


btnCasuta3Move.addEventListener('click', ()=>{
    // casutaAvion.classList.remove('casuta3Move--aparitie');
    // casutaAutocar.classList.remove('casuta3Move--aparitie');
    // casutaTren.classList.remove('casuta3Move--aparitie');
    casuta3Move.classList.remove('casuta3Move--aparitie');
})



// ------------------- Final contenedor 3 casute info -----------------------

// ---------------- contenedor 3 galerie ----------------------------

const slider3 = document.getElementById('slider3');
let poze3 = document.querySelectorAll('.casuta3-poza');
let poze3Last = poze3[poze3.length - 1];

slider3.insertAdjacentElement('afterbegin', poze3Last);

function urmatoarea(){
    let poze3First = document.querySelectorAll('.casuta3-poza')[0];
    const slider3 = document.getElementById('slider3');

    slider3.style.marginLeft = '-200%';
    slider3.style.transition = 'all .4s';

    setTimeout(function(){
        slider3.style.marginLeft = '-100%';
        slider3.style.transition = 'none';
        slider3.insertAdjacentElement('beforeend', poze3First);
    },400)

}

setInterval(function(){
    urmatoarea();
},5000);

// ---------------------------------------------------

const numeID = document.getElementById('numeID');

numeID.addEventListener('focus', ()=>{
    numeID.style.border = '3px solid blue';
})

numeID.addEventListener('blur', ()=>{
    numeID.style.border = 'none';
})

const emailID = document.getElementById('emailID');

emailID.addEventListener('focus', ()=>{
    emailID.style.border = '3px solid blue';
});

emailID.addEventListener('blur', ()=>{
    emailID.style.border = 'none';
})