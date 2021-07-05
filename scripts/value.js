'use strict'
document.addEventListener('DOMContentLoaded', function(){
    const {plus, minus, equally} = document.getElementById('item').elements;
    equally.addEventListener('change', (e) => {
        e.preventDefault();
        if(equally.value < 1){
            equally.value = 1
        }
    })
    plus.addEventListener('click', (e) => { 
        e.preventDefault();
        minus.disabled = false;
        return ++equally.value;
    })
    minus.addEventListener('click', (e) => {
        e.preventDefault();
        if(equally.value == 2){
            minus.disabled = true;
            return --equally.value;
        }
        else if(equally.value > 1){
            return --equally.value;
        }
        else{
            minus.disabled = true;
        }
    })
})