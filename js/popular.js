let offset = 0;
const popularLine = document.querySelector('.popular-line');
const ratingLine = document.querySelector('.ratings-line');

document.querySelector('.popular-next').addEventListener('click', function(){
    offset = offset + 324;
    if (offset > 972) {
        offset = 0;
    }
    popularLine.style.left = -offset + 'px';
});

document.querySelector('.popular-prev').addEventListener('click', function () {
    offset = offset - 324;
    if (offset < 0) {
        offset = 972;
    }
    popularLine.style.left = -offset + 'px';
});
document.querySelector('.ratings-next').addEventListener('click', function(){
    offset = offset + 420;
    if (offset > 840) {
        offset = 0;
    }
    ratingLine.style.left = -offset + 'px';
});

document.querySelector('.ratings-prev').addEventListener('click', function () {
    offset = offset - 420;
    if (offset < 0) {
        offset = 840;
    }
    ratingLine.style.left = -offset + 'px';
});

