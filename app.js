let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('.content .item');

let imgRotate = 0;
let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

function nextSlider() {
  active = active + 1 > countItem - 1 ? 0 : active + 1;
  rotate = rotate + rotateAdd;
  show();
}

function prevSlider() {
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  rotate = rotate - rotateAdd;
  show();
}

function show() {
  // Rotate the main container (if needed)
  image.style.setProperty('--rotate', rotate + 'deg');

  // Rotate each img element by 360 degrees using inline style
  items.forEach((item) => {
    const img = item.querySelector('img'); // Select the img inside each item
    imgRotate += 360; // Increment the rotation by 360 degrees each time
    img.style.setProperty('transform', `rotate(${imgRotate}deg)`); // Apply incremental rotation
  });

  // Handle active class toggling for content elements
  contents.forEach((content, key) => {
    if (key == active) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

// Event listeners for navigation buttons
next.onclick = nextSlider;
prev.onclick = prevSlider;
