const square = document.getElementById('square')
square.style.borderRadius = `${top}% ${100-top}% ${bottom}% ${100-bottom}% / ${100-left}% ${right}% ${100-right}% ${left}%`;
const border_radius = document.getElementById('output');



function Slide(){
    let top = document.getElementById("top").value;
    let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;
    let bottom = 100- document.getElementById("bottom").value;

    square.style.borderRadius = `${top}% ${100-top}% ${bottom}% ${100-bottom}% / ${100-left}% ${right}% ${100-right}% ${left}%`;

    border_radius.textContent = `${top}% ${100-top}% ${bottom}% ${100-bottom}% / ${100-left}% ${right}% ${100-right}% ${left}%`;
}

Slide()

function copy(){
    var copyText = border_radius.textContent;
    navigator.clipboard.writeText(copyText);
}


const blobContainer = document.getElementById('blob-container');
const numberOfBlobs = 20;

for (let i = 0; i < numberOfBlobs; i++) {
  const blob = document.createElement('div');
    blob.classList.add('blob');
    blob.style.width = `${Math.random() * 80 + 20}px`; // Random size
    blob.style.height = blob.style.width;
    blob.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`; // Random color with transparency
    blob.style.top = `${Math.random() * 100}vh`; 
    blob.style.left = `${Math.random() * 100}vw`;
    blob.style.animationDuration = `${Math.random() * 15 + 5}s`; 
    blob.style.animationDelay = `${Math.random() * 5}s`; 
    blobContainer.appendChild(blob);
}