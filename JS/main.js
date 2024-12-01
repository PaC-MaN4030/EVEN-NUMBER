let x = +prompt("put a RANDOM number please  ;)");
let plus = 0;
for (let i = 1; i < x; i++) {
  if (x % i === 0) 
    plus += i;
    document.write(`<h2>${i}</h2>`);
  }
  if (plus === x) {
    document.write(`<h4>${x} is an even number</h4>`);
  } else {
    document.write(`<h4>${x} is not an even number. try again please <3</h4>`);
  }

