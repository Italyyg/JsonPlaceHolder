"use strict"
 console.log("HI")

window.onload = () => {

    

    //get the create form off the page
    const createNewToDo = document.querySelector("#createNewToDoForm");

    //listen for the form submission and call createAComment
    createNewToDo.addEventListener("submit", createAToDO);

    // gettodos();

}
// async function gettodos(){
// try{
//  let response = await fetch("https://jsonplaceholder.typicode.com/todos/",
//     {
//         method: "GET"
//     }
//  );

//  let data = await response.json();

//  return data;

// }catch(err){
//     console.log("not today girl..")
// }
// }

async function createAToDO (event){

    event.preventDefault();

// generate a new form data object
    let formData = new FormData(event.target);

    //generate a JavaScript Object from the formData object created above
    let formDataAsObject = Object.fromEntries(formData);

    //try catch for error handling
    try {

        //make a fetch (POST) request to create a comment in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/",
            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                //take the data from the form and build the body of the request
                body: JSON.stringify(formDataAsObject)
            }
        );
        //turn the response in to something we can work with
        let newtoDO = await response.json();

        let results = document.querySelector("#results");
        results.innerHTML =`<p>You've Added a New ToDO!</p>`


        //put the comments in the console
        console.log(newtoDO)

    } catch (err) {

        console.log("Not Today..")

    }

}










