// Get the popup element and close button
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Show the popup after a delay
setTimeout(() => {
  popup.style.display = 'flex';
}, 500);

// Close the popup when the close button is clicked
closeBtn.onclick = function() {
  popup.style.display = 'none';
};

// Close the popup if the user clicks anywhere outside the popup content
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};
