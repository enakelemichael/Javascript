function onload() {
  let button = document.getElementById('button');
  let header = document.getElementById('fJava');
  button.addEventListener("click", function() {
      if (button.innerHTML == "On"){
          button.innerHTML = "Off";
          button.className = "redButton";
          header.innerHTML = "Prague sucks";
      }
      else {
          button.innerHTML = "On";
          button.className = "aquaButton";
          header.innerHTML = "I suck";
      }
  });
}