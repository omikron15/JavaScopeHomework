var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//Bob is declared globally outside the function and should be avaliable within the function as a result :)


score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//The variable score is declared within the function as 3 and thus t=when the function is called it will return the value of 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//the variable myAnimals is set inside the function and these values will be used when the function is called.
//The function is assigned to the variable listAnimals and called from there.

var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//inside the function the value of suspectThree is set to colin nd this value is printed to the console with the rest of the value declared globally
//outisde of the function the value of suspectthree is upul and this prints on the final line.
//Colin is only the value of suspectThree within the function allSuspescts

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//this should print "Poirot", all other declarations of the detive and its name are never called.


var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//Less sure about this one :( 
