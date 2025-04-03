window.onload= function(){
let time =6000;
const body = document.getElementsByTagName('body');
(function(){
    body[0].classList.add('overflow-hidden')
})();
setTimeout(() => {
    body[0].classList.remove('overflow-hidden')
}, time);
}