function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
// → The fat rabbit says 'I could sure use a carrot
//   right now.'

//The code uses the this keyword to output the type of rabbit that is speaking. Recall that the apply and bind methods both take a first argument that 
//can be used to simulate method calls. This first argument is in fact used to give a value to this.

//There is a method similar to apply, called call. It also calls the function it is a method of but takes its arguments normally, rather than as an array. 
//Like apply and bind, call can be passed a specific this value.

speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({type: "old"}, "Oh my.");
// → The old rabbit says 'Oh my.'