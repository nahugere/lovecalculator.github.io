function result() {
  var name = document.getElementById('name').value;
  var crush = document.getElementById('crush').value;
  if (name!='' && crush!='') {
    var random = Math.random();
    random = Math.floor(random*101)
    var answer = random+"%";
    if (random>=70) {
      var names = name + ' 💖 ' + crush;
      var advice = 'Y\'all are lucky! Don\'t mess this up.'
    } else if (random<70 && random>=50) {
      var names = name + ' 😐 ' + crush;
      var advice = 'You have a pretty good chance!'
      // 💔😨
    } else if (random<50 && random>=30) {
      var names = name + ' 💔 ' + crush;
      var advice = 'am out of words bro!'
    } else {
      var names = name + ' 😱 ' + crush;
      var advice = '😭 sorry bro.'
    }
    document.getElementById('result').innerHTML = answer;
    document.getElementById('names').innerHTML = names;
    document.getElementById('advice').innerHTML = advice;
  }
}
