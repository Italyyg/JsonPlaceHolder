"use strict"

window.onload = () => {
    console.log("it be working");

    // getting button off page
    let theButton = document.querySelector("#theButton");

    //adding a function to work its gear when the button is clicked
    theButton.addEventListener("click", connectTheNumbers);

}
async function displayInfo() {

    let userInput = document.querySelector("#todoId").value;
    //console.log(userInput)
    //fetching the data from the link but placing "await" so it will load in order
    let response = await fetch("http://jsonplaceholder.typicode.com/todos/" + userInput, {});
    //calling the data and getting in in a json response
    let data = await response.json();
    return data;


}
//seperate funciton we are calling that is doing all the work
async function connectTheNumbers() {

    //we are calling for the data here from other function to work with it 
    let info = await displayInfo();

    //this is where we displaying the information so we call it here
    let results = document.querySelector("#results");

    //gotta grab the input field to match it to the Id's in the data
    let userInput = Number(document.querySelector("#todoId").value);

    if (info.id === userInput) {

        return results.innerHTML = `<p>User ID: ${info.userId}</p> <p> ID: ${info.id}</p> <p>Title: ${info.title}</p> `;

    } else {
        return results.innerHTML = "What are you doing? That wont work here..";
    }

}









