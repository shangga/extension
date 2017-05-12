(function () {
  var time = new Date(),
  hour = time.getHours(),
  min = time.getMinutes(),
  sec = time.getSeconds(),
  total = hour * 3600 + min * 60 + sec;
  if (0 < total && total <  74) {
    setInterval(function () {
    }, 1000);
  }
})();
