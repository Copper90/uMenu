document.addEventListener("keydown", function (e) {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://j4ham3z.github.io/uMenu/index.html';
    iframe.width = '800';
    iframe.height = '600';
    iframe.style.border = '1px solid black';
    document.getElementById('container').appendChild(iframe);
});
