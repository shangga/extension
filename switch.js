var a = document.getElementById('signin_bonus');
a.addEventListener('click', function() {});
var time =  Math.floor(Math.random() * 9 + 1) * 1000;
var times = sessionStorage.getItem('times') || 0;
var interval = setInterval(function () {
  sessionStorage.setItem('times', times);
  if (times > 2) {
    clearInterval(interval);
    sessionStorage.removeItem('times');
    return false;
  }
  a.click();
  window.location.reload();
  times ++;
  sessionStorage.setItem('times', times);
}, time);
