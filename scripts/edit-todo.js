"use strict"

console.log("hi girl");
window.onload = () => {

    // grabbing the input where the user chooses what toDo they want to edit, use the value of this 
    let chooseToDOtoUpdate = document.querySelector("#chooseToDoToEditForm");

    //  grabbing the input for to display current data of toDo and edit it to resubmit
    let ToDoInfo = document.querySelector("#UpdateToDoForm");


    //we will cause the submit of this form to run the function that will populate wanted data
    chooseToDOtoUpdate.addEventListener("submit", populateUpdateForm);


    //after submitting form the data will then update 
    ToDoInfo.addEventListener("submit", updateTheToDO);

    let cancelButton = document.querySelector("#cancelButton");

    cancelButton.addEventListener("click", cancelEdit);


}

const updateTheToDO = async (event) => {

    event.preventDefault();

    console.log(event.target);

    //try catch for error handling
    try {

        //make a fetch (PUT) request to update a toDO in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/" + event.target.id.value,
            {
                method: "PUT",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userid: event.target.userid.value,
                    title: event.target.title.value,
                    completed: event.target.completed.value
                })
            }
        );
        //turn those comments in to something we can work with
        let updatedTodo = await response.json();

        //put the comments in the console
        console.log(updatedTodo)

    } catch (err) {


        console.log("This isnt gonna work..", err)

    }

}

async function getSingletoDO(toDoID) {

    let response = await fetch("https://jsonplaceholder.typicode.com/todos/" + toDoID);
    let todo = await response.json();

    return todo;

}

async function populateUpdateForm(event) {
    event.preventDefault();

    //go get the single toDo for the id the user selected
    let toDos = await getSingletoDO(event.target.toDoId.value);

    //fill out the form with the data from the comment we just got from the API
    document.querySelector("#userid").value = toDos.userId;
    document.querySelector("#title").value = toDos.title;
    document.querySelector("#completed").value = toDos.completed;
    document.querySelector("#id").value = toDos.id;


}

const cancelEdit = () => {

    //redirect folks back to the homepage
   let answer = confirm ("Are you sure you want to cancel?");
    if (answer){
        window.location.href = "./index.html"
}
}

