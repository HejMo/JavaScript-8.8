var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
console.log(text);

var animal = 'Zielone słonie';
console.log(animal);
animal = animal.toUpperCase();
console.log(animal);

var textArray = text.split(' koszą');
text = text.replace(textArray[0], animal);
console.log(text);

console.log('First part of sentence :');
var firstHalfOfText = text.substr(0, (text.length) / 2);
console.log(firstHalfOfText);

console.log('Second part of sentence :');
var secondHalfOfText = text.substr((text.length) / 2, (text.length) / 2);
console.log(secondHalfOfText);