
const nav = document.querySelector('.nav');
const tog = document.querySelector('.toggle-collapse');
const moveUp = document.querySelector('.move-up')

tog.addEventListener('click', () => {
    nav.classList.toggle('collapse');
})


//Scroll up
// moveUp.addEventListener('click', () => {
//     window.AnimationEffect({
//         scrollTop: 0
//     }, 1000)
// })

