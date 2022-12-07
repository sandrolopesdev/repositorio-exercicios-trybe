const backgrounds = (element, color) => {
  const emergency = document.querySelector(element);
  console.log(emergency);
  emergency.style.background = color;
};
backgrounds('#header-container', '#036B52');
