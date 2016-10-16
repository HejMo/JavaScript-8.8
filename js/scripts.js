var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
console.log(text);

var animal = 'Zielone słonie';
console.log(animal);
var animal = animal.toUpperCase();
console.log(animal);

var text = text.replace('Papugi', animal);
console.log(text);

console.log('First part of sentence :');
var firstHalfOfText = text.substr(0, (text.length) / 2);
console.log(firstHalfOfText);

console.log('Second part of sentence :');
var secondHalfOfText = text.substr((text.length) / 2, (text.length) / 2);
console.log(secondHalfOfText);