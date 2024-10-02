const clock = document.querySelector("#clock");

//setInterval is use for cotinously run of method we also discribe time and time is available in milisecond that is reason I write 1000

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
