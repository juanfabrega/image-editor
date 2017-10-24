"use strict";

document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.range-input');

  inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
  })
});

function handleUpdate() {
  console.log(this.value);
}
