const elems = document.querySelectorAll('input[type="checkbox"]');
const numbers = document.querySelectorAll('.order input[type="number"]');
const res = document.querySelector('.result');
const btn = document.querySelector('.btn');
const field = document.querySelector('.middle');
const user = document.querySelectorAll('.user input');


field.addEventListener('click', function () {
    let total = 0;
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].checked && numbers[i].value > 0) {
            total += elems[i].value * numbers[i].value;

        } else if (elems[i].checked && numbers[i].value < 1) {
            numbers[i].value = 1;
        }
        res.innerHTML = `Итого: ${total}p.`;
    }
})

for (let elem of elems) {
    elem.addEventListener('click', function () {
        if (elem.checked) elem.parentNode.lastElementChild.value = 1;
        else elem.parentNode.lastElementChild.value = 0;
    });
}


function getElems(elems, numbers) {
    let out = [];
    for (let i = 0; i < elems.length; i++) {
        // let count = 15 - parseInt(elems[i].id.length);
        if (elems[i].checked) {
            out += (elems[i].id + " - " + numbers[i].value + " шт." + "*");
        }
    }
    return out.split("*").join("\n");
}



btn.addEventListener('click', function () {
    alert(`Заказчик: ${user[0].value} ${user[1].value}\n\n${getElems(elems, numbers)}\n${res.innerHTML}`);
})
