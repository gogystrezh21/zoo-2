let nav = document.querySelector('.nav');
let btn = document.querySelector('.hamburger-menu');
let body = document.querySelector('.container-full')
let logo = document.querySelector('.logo')
let fakelogo = document.querySelector('.fakelogo')


btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('close');
    body.classList.toggle('close');
    logo.classList.toggle('close');
    fakelogo.classList.toggle('close');
});

let navOpen = document.querySelectorAll( '.nav.open');
let btnClose=document.querySelector('.hamburger-menu.close');
let open= document.querySelector('.open')
 
nav.addEventListener( 'click', (e) => {
    let navOpen = document.querySelector( 'nav');
	if ( e.target==navOpen ) {  
        nav.classList.toggle('open');
        btn.classList.toggle('close');
        body.classList.toggle('close');
        logo.classList.toggle('close');
        fakelogo.classList.toggle('close');
        console.log("e")
    }	
})
