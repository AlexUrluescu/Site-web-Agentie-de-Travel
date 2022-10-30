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

for(let i=0; i < buton_sageata.length; i++){
    buton_sageata[i].addEventListener('click', (e)=>{
        switch(e.target){
            case btn_sageata1:
                // alert("merge");
                casuta_descriere[0].classList.add("casuta_descriere--aparitie")
                btn_sageataJos.style.display = 'inline-block';
                buton_sageata[0].style.display = 'none';
                break;
            
            case btn_sageata2:
                alert("merge");
                break;
            
            case btn_sageata3:
                
                break;

            case btn_sageata4:
                
                break;
        }
    })
}

btn_sageataJos.addEventListener("click", ()=>{
    casuta_descriere[0].classList.remove("casuta_descriere--aparitie")
    btn_sageataJos.style.display = 'none';
    buton_sageata[0].style.display = 'inline-block';
})

