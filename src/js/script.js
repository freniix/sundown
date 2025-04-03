window.onload= function(){
const body = document.getElementsByTagName('body');
(function(){
    body[0].classList.add('overflow-hidden')
})();
setTimeout(() => {
    body[0].classList.remove('overflow-hidden')
}, 6000);
}