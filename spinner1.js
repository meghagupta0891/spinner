let flag = false;
const callSpinner = function() {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
    if(!flag) {
        flag = true;
        setTimeout(callSpinner,200);
    }
    else {
        setTimeout(() => {
            process.stdout.write('\r|   ');
        }, 200);
    }
  }, 700);
}

callSpinner();
  
  