"use strict"

window.onload=()=>{
console.log("It's working, or is this a trick?")

displayTable();


}
function displayTable(){
let table = document.querySelector("#userTableBody");

fetch("http://jsonplaceholder.typicode.com/users")
.then(response => response.json())

.then(data => {

for(let i=0; i<data.length; i++) {

let row = table.insertRow();

let cell1 = row.insertCell(0);
cell1.innerHTML = data[i].name

let cell2 = row.insertCell(1);
cell2.innerHTML= data[i].username

let cell3 = row.insertCell(2);
cell3.innerHTML = data[i].email

let cell4 = row.insertCell(3);
cell4.innerHTML = data[i].phone

let cell5 = row.insertCell(4);
cell5.innerHTML = data[i].website

let cell6 = row.insertCell(5);
cell6.innerHTML = data[i].id

}
});

}
