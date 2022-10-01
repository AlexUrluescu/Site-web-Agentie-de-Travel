
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

const btnContenedor2 = document.getElementById('btn-contenedor2');
const casuta2_move = document.getElementById('casuta2-move');

btnContenedor2.addEventListener('click', function(){
    let widthCasuta2 = casuta2_move.clientWidth;
    
    casuta2_move.classList.toggle('casuta-move--aparitie');
    
    if(widthCasuta2 > 0){
        btnContenedor2.setAttribute('value', 'Mai mult')
    }

    else if(widthCasuta2 == 0){
        btnContenedor2.setAttribute('value', 'Inapoi');
    }
    
})



