document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === '~') {
    console.log("Ctrl + Shift + ~ pressed!");

    // Check if the iframe already exists
    if (!document.getElementById('umenu-frame')) {
      const iframe = document.createElement('iframe');
      iframe.id = 'umenu-frame';
      iframe.src = 'https://Copper90.github.io/uMenu/index.html';
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

// Track the drag state
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Listen for messages from the iframe
window.addEventListener("message", function (event) {
  const trustedOrigin = "https://copper90.github.io";

  // Ensure the message is from the iframe's origin
  if (event.origin.toLowerCase() === trustedOrigin.toLowerCase()) {
    const data = event.data;

    if (data.type === 'start-drag') {
      // Dragging has started
      isDragging = true;

      // Calculate offset between iframe position and mouse position
      const iframe = document.getElementById('umenu-frame');
      const rect = iframe.getBoundingClientRect();
      offsetX = data.startX - rect.left;
      offsetY = data.startY - rect.top;
    } else if (data.type === 'dragging' && isDragging) {
      // Dragging in progress
      const iframe = document.getElementById('umenu-frame');
      iframe.style.left = `${data.currentX - offsetX}px`;
      iframe.style.top = `${data.currentY - offsetY}px`;
    } else if (data.type === 'stop-drag') {
      // Dragging has stopped
      isDragging = false;
    } else if (data === "close-iframe-umenu") {
      console.log("Valid message received to close the iframe...");

      // Find and remove the iframe
      const iframe = document.getElementById('umenu-frame');
      if (iframe) {
        iframe.parentNode.removeChild(iframe);
        console.log("Iframe closed and removed from the DOM.");
      }
    }
  } else {
    console.warn("Message received from an untrusted origin:", event.origin);
  }
});
