const $ = e => document.querySelector(e);
const $$ = es => document.querySelectorAll(es);

var btn = $('button');
var wrap = $('.wrap');
btn.addEventListener('click', ()=>{
    alert('Winner winner chicken dinner🎉🎊🎁');
})
btn.addEventListener('mousemove', ()=>{
    btn.style.top = Math.floor(Math.random() * (wrap.clientHeight - btn.clientHeight)) + "px";
    btn.style.left = Math.floor(Math.random() * (wrap.clientWidth - btn.clientWidth)) + "px";
})