var btnMenu = document.getElementById('btnMenu');
btnMenu.onclick = function (){
    btnTimes.style.display = 'inline-block';
    btnMenu.style.display = 'none';
   
};
btnTimes.onclick = function (){
    btnTimes.style.display = 'none';
    btnMenu.style.display = 'inline-block';
    
};