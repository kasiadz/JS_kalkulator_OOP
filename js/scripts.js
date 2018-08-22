'use strict';

// hermetyzacja
(function(){
    // konstruktor
    function Calculator(){
        this._buttons = document.querySelectorAll('input[type="button"]');
        this._resPlace = document.querySelector('#res');

        this._assignEvents(this._buttons);
    }

    Calculator.prototype._assignEvents = function(buttons){
        buttons.forEach(this._click, this);
    }
    Calculator.prototype._click = function(elem, i){
        elem.addEventListener('click', this._calc.bind(this));
    }
   
    // funkcja calc
    Calculator.prototype._calc = function(event){
        const buttonValue = event.target.value;
        if (buttonValue === 'C') {
            this._resPlace.value = '';
        } else if (buttonValue === '=') {
            this._resPlace.value = eval(this._resPlace.value);
        } else {
            this._resPlace.value += buttonValue;
        }
    
    }
// instancja klasy - obiekt
    const oblicz = new Calculator();
})()


