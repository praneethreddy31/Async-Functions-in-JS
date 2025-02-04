async function fetchData() {
    try {
        let data1 = await fetch('https://api.example1.com');
        if(!Response.ok) {
           throw new Error('failed');
        }
        let result = data1.json();
        console.log(result);
        } catch(error) {
            console.error("there is an error :" , error);
        }
}

fetechData() 
//response.ok is a property of the Response object in JavaScript (typically used with fetch API to handle HTTP responses).
//It returns true if the response was successful (status code 200-299).
//It returns false if the response was unsuccessful (status code 400 or higher).

//or

fetch('https/api.example.com');
.then( response => {
   if(!response.ok) {
    console.log("unsuccess");
   }  else {
    console.log("success");
   }
})

.catch(error => console.error('Error:', error));

.catch()

//.catch() is a method used to handle errors that occur during the Promise's lifecycle.
//If there is an error anywhere in the fetch() request, the .catch() block will run.
//It allows you to handle exceptions, like network errors, server downtime, etc.
//The error parameter in error => console.error('Error:', error) represents the error that occurred (it could be a failed network request or any other issue).
