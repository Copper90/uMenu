document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === '~') {
    console.log("Ctrl + Shift + ~ pressed!");

    if (!document.getElementById('umenu-frame')) {
      const iframe = document.createElement('iframe');
      iframe.id = 'umenu-frame';
      iframe.src = 'https://j4ham3z.github.io/uMenu/';
      iframe.width = '800';
      iframe.height = '600';
      iframe.style.border = '1px solid black';
      iframe.style.position = 'absolute';
      iframe.style.top = '50px';
      iframe.style.left = '50px';
      iframe.style.zIndex = '1000';
      iframe.style.backgroundColor = 'white';
      
      document.body.appendChild(iframe);
    }
  }
});
