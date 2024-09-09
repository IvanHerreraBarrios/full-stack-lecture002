/*let number;

number = prompt("Enter value");

if (number % 2 === 0) {
    alert(number + 'is even');
} else {
    alert(number + 'is od');
}

let note1, note2, note3, average;

note1 = parseInt(prompt('Note 1'));
note2 = + prompt('Note 2');
note3 = + prompt('Note 3');

average = (note1 + note2 + note3) / 3;
alert("The average is" + average);

let notes = [note1, note2, note3];
average = (notes[0] + notes[1] + notes[3]) / 3;

*/
let sumNotes = 0;
let average;
let numberOfNotes;

numberOfNotes = int(prompt("Enter the number of notes"));

//for
for (let index = 0; index < numberOfNotes; index++) {
    let loadedNote = + prompt("Enter" + i + "");
    sumNotes = sumNotes + loadedNote;
    //sumNotes += loadedNote;
}

average = sumNotes / numberOfNotes;

alert("Average = ", average);

let day = 5;

//monday
//tuesday
if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tusday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else {
    console.log("Sunday");
}

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tusday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong");
        break;
}

let a, b, r, operation;
let option = prompt("Enter the option: 1 a:addition s:substraction m:multiplication d: division");
a = prompt("a");
b = prompt("b");
switch (option) {
    case "a":
    case 1:
        operation = "addition";
        r = a + b;
        alert("Adition");
        break;
    case "s":
        operation = "substraction";
        r = a - b;
        alert("substraction");
        break;
    case "m":
        operation = "multiplication";
        r = a * b;
        alert("multiplication");
        break;
    case "d":
        operation = "division";
        r = a / b;
        if (b != 0) {
            r = a / b;
        } else {
            alert("Cannot be divided by 0");
        }
        alert("division");
        break;

    default:
        break;
}
//alert(), prompt(), console.log()
if (r !== undefined) {
    document.write("The" + operation + "of" + a + " " + b + r);
} else {
    document.write("Math error");
}
