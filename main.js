"use strict";

//main script loaded after DOM load is complete.
document.addEventListener('DOMContentLoaded', function() {
  // variable to grab object (node list) of all inputs with class .range-input
  const inputs = document.querySelectorAll('.range-input');

  // iterate over elements in node list and listen for change and mouse movement.
  // we listen for mouse movement so the value is read despite not releasing a click.
  inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
  })
});

//function to handle changing the value of the selected element.
function handleUpdate() {

  // the suffix will append the value type of each variable (%, px, etc)
  // it is left blank if the variable has no suffix
  const suffix = this.dataset.sizing || '';

  //change style of element based on its name and new value from input.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
