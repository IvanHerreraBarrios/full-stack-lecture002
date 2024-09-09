let div = "result";
let divResult = document.getElementById(div);
alert(typeof divResult);
//show attribute
alert(divResult.innerHTML);

divResult.innerHTML = "Now it is no longer empty";

let day = new Date();

let divDate = document.getElementById("date");
divDate.innerHTML = `<p>I am a paragraph</p>`;
divDate.innerHTML = divDate.innerHTML + day.getDate() + "/"(day.getMonth() + 1) + "/" + day.getFullYear();



day.getDay();


let date = day.getHours() + "-" + day.getMinutes() + "-" + day.getSeconds();
divDate.innerHTML = divDate.innerHTML + "-" + date;

let today = day.getDay(); // 0 - 6
//It has several methods
let todayAsString;
switch (today) {
    case 0: today = "Monday"; break;
    case 1: today = "Tuesday"; break;
    case 2: today = "Wednesday"; break;
    case 3: today = "Thursday"; break;
    case 4: today = "Friday"; break;
    case 5: today = "Saturday"; break;
    case 6: today = "Sunday"; break;

}

divDate.innerHTML = divDate.innerHTML + "-" + todayAsString;

//Own objects
const student  = {
    id:1,
    name:"Alfredo",
    lastName:"Maidana"
};

console.log(typeof student);
let divStudent = document.getElementById("student");
divStudent.innerHTML = student.name;

/**
 * document.querySelector('<div>')
 */

let divs = document.querySelectorAll('div');
console.log(divs);

for (let i = 0; i < divs.length; i++) {
    alert(divs[i].innerHTML);
}