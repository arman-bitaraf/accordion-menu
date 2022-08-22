const acc = document.getElementsByClassName('accordion');
const panel=document.querySelector('.panel');
acc[0].addEventListener('click', function (){
    acc[0].classList.toggle('active');
    if(panel.style.maxHeight){
        panel.style.maxHeight=null;
    }
    else{
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
})