function livetime() {
  let currtime = new Date().toLocaleTimeString();
  document.querySelector('.live').innerText = currtime;
}

setInterval(livetime, 999);
