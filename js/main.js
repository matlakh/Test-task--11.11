document.addEventListener('DOMContentLoaded', function(event) {
    const button = document.querySelector('.buttons__change');
    const name = document.querySelector('.content__name');
    const img = document.querySelector('.logo__img');


    button.onclick = function() {
        name.style.display = 'flex';
        img.style.display = 'none'
    }

})