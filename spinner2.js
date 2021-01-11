let spinnerElements = ['|','/','-','\\','|','/','-','\\','|'];
var i = 100;
for(let a = 0; a < spinnerElements.length ; a++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnerElements[a] + '  ');
  }, i);
  i += 200;
}