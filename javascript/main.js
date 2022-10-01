
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
})

// ----------------- galerie poze fatada -------------------

const slider = document.querySelector('.contenedor-poze');
let poza = document.querySelectorAll('.casuta-poza');
let pozaLast = poza[poza.length - 1];

const btn_stanga = document.getElementById('btn-stg');
const btn_dreapta = document.getElementById('btn-drt');

slider.insertAdjacentElement('afterbegin', pozaLast);

btn_dreapta.addEventListener('click', next);

function next(){
    let pozaFirst = document.querySelectorAll('.casuta-poza')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all .4s';

    setTimeout(function(){
        slider.insertAdjacentElement('beforeend', pozaFirst);
        slider.style.marginLeft = '-100%';
        slider.style.transition = 'none';
    },400)
};

btn_stanga.addEventListener('click', function(){
    let poza = document.querySelectorAll('.casuta-poza');
    let pozaLast = poza[poza.length - 1];

    slider.style.marginLeft = '0%';
    slider.style.transition = 'all .4s';

    setTimeout(function(){
        slider.insertAdjacentElement('afterbegin', pozaLast);
        slider.style.marginLeft = '-100%';
        slider.style.transition = 'none';
    },400)
});


setInterval(function(){
    next()
},10000)



// ---------- link inteligent -------------

const link = document.getElementById('link');
const extra = document.querySelector('.text-extra');
const inapoi = document.getElementById('btn-inapoi');

link.addEventListener('click', function(){
    
    extra.classList.add('extra--aparitie');
    link.classList.add('btn--dispare');
    inapoi.classList.add('btn--apare');
  
});

inapoi.addEventListener('click', function(){
    extra.classList.remove('extra--aparitie');
    link.classList.remove('btn--dispare');
    inapoi.classList.remove('btn--apare');
 
})

// --------- casute vacanta -----------

const contenedor_asc = document.getElementById('cont_asc');
const textAscuns = document.querySelectorAll('.content-ascuns');


let casutaVac = document.querySelectorAll('.casuta-cont3');

for(let i=0; i<casutaVac.length; i++){
    casutaVac[i].addEventListener('click', aparitie_cont)
}

function aparitie_cont(e){

    if(window.innerWidth>760){
        if(e.target == casutaExcursii){
        
            let height = contenedor_asc.scrollHeight;
            contenedor_asc.style.height = height + 'px';

            textAscuns[0].classList.add('casute--aparitie');

            textAscuns[1].classList.remove('casute--aparitie');
            textAscuns[2].classList.remove('casute--aparitie');
            textAscuns[3].classList.remove('casute--aparitie');
            textAscuns[4].classList.remove('casute--aparitie');


        }

        else if(e.target == croaziera){

            let height = contenedor_asc.scrollHeight;
            contenedor_asc.style.height = height + 'px';
            
            textAscuns[1].classList.add('casute--aparitie');

            textAscuns[0].classList.remove('casute--aparitie');
            textAscuns[2].classList.remove('casute--aparitie');
            textAscuns[3].classList.remove('casute--aparitie');
            textAscuns[4].classList.remove('casute--aparitie');

        }

        else if(e.target == barca){

            let height = contenedor_asc.scrollHeight;
            contenedor_asc.style.height = height + 'px';

            textAscuns[2].classList.add('casute--aparitie');
            
            textAscuns[0].classList.remove('casute--aparitie');
            textAscuns[1].classList.remove('casute--aparitie');
            textAscuns[3].classList.remove('casute--aparitie');
            textAscuns[4].classList.remove('casute--aparitie');
        }

        else if(e.target == scufundari){

            let height = contenedor_asc.scrollHeight;
            contenedor_asc.style.height = height + 'px';

            textAscuns[3].classList.add('casute--aparitie');
            
            textAscuns[0].classList.remove('casute--aparitie');
            textAscuns[1].classList.remove('casute--aparitie');
            textAscuns[2].classList.remove('casute--aparitie');
            textAscuns[4].classList.remove('casute--aparitie');
        }

        else{

            let height = contenedor_asc.scrollHeight;
            contenedor_asc.style.height = height + 'px';

            textAscuns[4].classList.add('casute--aparitie');
            
            textAscuns[0].classList.remove('casute--aparitie');
            textAscuns[1].classList.remove('casute--aparitie');
            textAscuns[2].classList.remove('casute--aparitie');
            textAscuns[3].classList.remove('casute--aparitie');
        }
    }

    else{
        contenedor_asc.style.height='0px';
    }
}   


const btnAscunde = document.querySelectorAll('.btnAscunde');
for(var i=0; i<btnAscunde.length; i++){
    btnAscunde[i].addEventListener('click', butoaneInchidere)
}

function butoaneInchidere(e){
    if(e.target == butonAscunde){
        let height = 0;
        contenedor_asc.style.height = height + 'px';
    }

    else if(e.target == butonAscunde2){
        let height = 0;
        contenedor_asc.style.height = height + 'px';
    }

    else if(e.target == butonAscunde3){
        let height = 0;
        contenedor_asc.style.height = height + 'px';
    }

    else if(e.target == butonAscunde4){
        let height = 0;
        contenedor_asc.style.height = height + 'px';
    }

    else{
        let height = 0;
        contenedor_asc.style.height = height + 'px';
    }
}