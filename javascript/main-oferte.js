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

const slider1 = document.querySelector(".poze-all1");
let poze = document.querySelectorAll(".poze-all1 .casuta1-poza");
let pozaLast = poze[poze.length - 1];

slider1.addEventListener("click", next());

function next(){

    let primaPoza = document.querySelectorAll('.casuta1-poza')[0];
    const slider1 = document.querySelector('.poze-all1');

    slider1.style.marginLeft = '-200%';
    slider1.style.transition = 'all .5s';

    setTimeout(function(){
        slider1.style.marginLeft = '-100%';
        slider1.style.transition = 'none';
        slider1.insertAdjacentElement('beforeend', primaPoza);
    },500)
};

setInterval(()=>{
    next();
},6000);

// -----------------------------------------------------------

let buton_sageata = document.querySelectorAll('.buton-sageata');
let casuta_descriere = document.querySelectorAll('.casuta-descriere');
let casuta = document.querySelectorAll('.casuta');
let btn_sageataJos = document.getElementById("btn_sageataJos1");
let butoane_sageataJos = document.querySelectorAll('.buton_sageataJos')

for(let i=0; i < buton_sageata.length; i++){
    buton_sageata[i].addEventListener('click', (e)=>{
        switch(e.target){
            case btn_sageata1:
                // alert("merge");
                casuta_descriere[0].classList.add("casuta_descriere--aparitie")
                casuta_descriere[0].classList.add("casuta_descriere--culoare")
                butoane_sageataJos[0].style.display = 'inline-block';
                buton_sageata[0].style.display = 'none';
                break;
            
            case btn_sageata2:
                casuta_descriere[1].classList.add("casuta_descriere--aparitie");
                casuta_descriere[1].classList.add("casuta_descriere--culoare");
                butoane_sageataJos[1].style.display = 'inline-block';
                buton_sageata[1].style.display = 'none';
                break;
            
            case btn_sageata3:
                casuta_descriere[2].classList.add("casuta_descriere--aparitie");
                casuta_descriere[2].classList.add("casuta_descriere--culoare");
                butoane_sageataJos[2].style.display = 'inline-block';
                buton_sageata[2].style.display = 'none';
                break;

            case btn_sageata4:
                casuta_descriere[3].classList.add("casuta_descriere--aparitie");
                casuta_descriere[3].classList.add("casuta_descriere--culoare");
                butoane_sageataJos[3].style.display = 'inline-block';
                buton_sageata[3].style.display = 'none';
                break;
        }
    })
}



for(let i=0; i < butoane_sageataJos.length; i++){
    butoane_sageataJos[i].addEventListener('click', (e)=>{
        switch(e.target){
            case btn_sageataJos1:
                casuta_descriere[0].classList.remove("casuta_descriere--aparitie");
                casuta_descriere[0].classList.remove("casuta_descriere--culoare")
                butoane_sageataJos[0].style.display = 'none';
                buton_sageata[0].style.display = 'inline-block';
                break;

            case btn_sageataJos2:
                casuta_descriere[1].classList.remove("casuta_descriere--aparitie");
                casuta_descriere[1].classList.remove("casuta_descriere--culoare")
                butoane_sageataJos[1].style.display = 'none';
                buton_sageata[1].style.display = 'inline-block';
                break;

            case btn_sageataJos3:
                casuta_descriere[2].classList.remove("casuta_descriere--aparitie");
                casuta_descriere[2].classList.remove("casuta_descriere--culoare")
                butoane_sageataJos[2].style.display = 'none';
                buton_sageata[2].style.display = 'inline-block';
                break;

            case btn_sageataJos4:
                casuta_descriere[3].classList.remove("casuta_descriere--aparitie");
                casuta_descriere[3].classList.remove("casuta_descriere--culoare")
                butoane_sageataJos[3].style.display = 'none';
                buton_sageata[3].style.display = 'inline-block';
                break;
        }
       
    })
}

// ------------------------------------------------------

const slider_ctn4 = document.getElementById('slider4');
let poze_ctn4 = document.querySelectorAll('.casuta4-poza');
let poze_ctn4Last = poze_ctn4[poze_ctn4.length - 1];
// let titlu = querySelector(".contenedor4-titlu");
// titlu.addEventListener('click', next2());

function urmatoarea(){
    const slider_ctn4 = document.getElementById('slider4');
    let poze_ctn4First = document.querySelectorAll('.casuta4-poza')[0];

    slider_ctn4.style.marginLeft = '-200%';
    slider_ctn4.style.transition = 'all .9s';

    setTimeout(function(){
        slider_ctn4.style.marginLeft = '-100%';
        slider_ctn4.style.transition = 'none';
        slider_ctn4.insertAdjacentElement("beforeend", poze_ctn4First)
    }, 900)

    //  slider_ctn4.style.marginLeft = '0%';
}

setInterval(function(){
    urmatoarea();
}, 5000);


// --------------------------------------------------------



