const starts = document.querySelector('.ratings').children;
console.log(starts)
const ratingValu = document.querySelector('#rating-value');
let index;
for (let i = 0; i < starts.length; i++) {
    starts[i].addEventListener('mouseover', function () {
        console.log(i)
        for (let j = 0; i < starts.length; j++) {
            starts[j].classList.remove("fa-star");
            starts[j].classList.add("fa-star-o");
        }
        for (let j = 0; j <= i; j++) {
            starts[j].classList.remove("fa-star-o");
            starts[j].classList.add("fa-star");
        }
    })
    starts[i].addEventListener('click', function () {
        ratingValu.value = i + 1;
        index = i;
    })
    starts[i].addEventListener('mouseout', function () {
        console.log(i)
        for (let j = 0; i < starts.length; j++) {
            starts[j].classList.remove("fa-star");
            starts[j].classList.add("fa-star-o");
        }
        for (let j = 0; j <= index; j++) {
            starts[j].classList.remove("fa-star-o");
            starts[j].classList.add("fa-star");
        }
    })
}