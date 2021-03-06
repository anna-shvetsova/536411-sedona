
var button = document.querySelector('.search-hotel .button-brown');
var modal = document.querySelector('.form-search-hotel');
var numberAdults = modal.querySelector('[name = number-adults]');
var numberChildren = modal.querySelector('[name = number-children]');

var isStorageAvailable = true;

try {
    localStorage.length;
}
catch (err) {
    isStorageAvailable = false;
};

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('form-search-hotel-show')) {
        modal.classList.remove('form-search-hotel-show');
    }
    else {
        modal.classList.add('form-search-hotel-show');

        var arrRequired = modal.querySelectorAll('[required]');
        for (var i = 0; i < arrRequired.length; i++) {
           if (arrRequired[i].classList.contains('field-empty')) {
                arrRequired[i].classList.remove('field-empty');
            }
        }
        
        if (isStorageAvailable) {
            var val;

            val = localStorage.getItem('numberAdults');
            numberAdults.value = (val !== null && val.trim().length !== 0) ? val : '2';

            val = localStorage.getItem('numberChildren');
            numberChildren.value = (val !== null && val.trim().length !== 0) ? val : '0';
        }

        modal.querySelector('[type = text]').focus();
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode !== 27) return;
    if (modal.classList.contains('form-search-hotel-show')) {
        evt.preventDefault();
        modal.classList.remove('form-search-hotel-show');
    };
});

var buttonBlue = modal.querySelector('.button-blue');
buttonBlue.addEventListener('click', function () {
    var arrRequired = modal.querySelectorAll('[required]');
    for (var i = 0; i < arrRequired.length; i++) {
        if (arrRequired[i].classList.contains('field-empty')) {
            arrRequired[i].classList.remove('field-empty');
        }
    }
    modal.offsetWidth = modal.offsetWidth;

    for (var i = 0; i < arrRequired.length; i++) {
        if (!arrRequired[i].value) {
            arrRequired[i].classList.add('field-empty');
        }
    };
});

modal.addEventListener('submit', function () {
    if (isStorageAvailable) {
        localStorage.setItem('numberAdults',numberAdults.value);
        localStorage.setItem('numberChildren',numberChildren.value);
    }
}); 