const inputs = document.querySelectorAll('.input');
const labels = document.querySelectorAll('.label');

inputs.forEach((item) => {
    item.addEventListener('focus', function () {
        const t1 = this.getAttribute('ID');

        labels.forEach((item) => {
            item.style.display = 'none';
            if (item.getAttribute('for') === t1) {
                item.style.display = 'block';
            }
        });

        console.log(t1);
    });

    item.addEventListener('blur', () => {
        labels.forEach((item) => {
            item.style.display = 'none';
        });
    });
});

const activeText = document.querySelector('.form-section__title--active');

activeText.addEventListener('dblclick', (e) => {
    console.log('dblclick', e.detail);
});

activeText.addEventListener('click', (e) => {
    console.log(e.detail);
    document.querySelector('.personaly__wrapper-input--hide').style.display =
        'block';
});
