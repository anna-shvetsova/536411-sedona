var button=document.querySelector(".search-hotel .button-brown"),modal=document.querySelector(".form-search-hotel"),numberAdults=modal.querySelector("[name = number-adults]"),numberChildren=modal.querySelector("[name = number-children]"),isStorageAvailable=!0;try{localStorage.length}catch(e){isStorageAvailable=!1}button.addEventListener("click",function(e){if(e.preventDefault(),modal.classList.contains("form-search-hotel-show"))modal.classList.remove("form-search-hotel-show");else{modal.classList.add("form-search-hotel-show");for(var t,l=modal.querySelectorAll("[required]"),o=0;o<l.length;o++)l[o].classList.contains("field-empty")&&l[o].classList.remove("field-empty");if(isStorageAvailable)t=localStorage.getItem("numberAdults"),numberAdults.value=null!==t&&0!==t.trim().length?t:"2",t=localStorage.getItem("numberChildren"),numberChildren.value=null!==t&&0!==t.trim().length?t:"0";modal.querySelector("[type = text]").focus()}}),window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("form-search-hotel-show")&&(e.preventDefault(),modal.classList.remove("form-search-hotel-show"))});var buttonBlue=modal.querySelector(".button-blue");buttonBlue.addEventListener("click",function(){for(var e=modal.querySelectorAll("[required]"),t=0;t<e.length;t++)e[t].value?e[t].classList.contains("field-empty")&&e[t].classList.remove("field-empty"):e[t].classList.contains("field-empty")||e[t].classList.add("field-empty")}),modal.addEventListener("submit",function(){isStorageAvailable&&(localStorage.setItem("numberAdults",numberAdults.value),localStorage.setItem("numberChildren",numberChildren.value))});