// To-To-APP
let todo = [];
let req = prompt("Please enter your request(add,delete,quit,list): ");

while(true){
    if(req == "quit"){
        console.log("Quitting App");
        break;
    }

    if(req == "list"){
        console.log("-------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------");

    }else if(req == "add"){
        let task = prompt("Please enter your task to add:");
        todo.push(task);
        console.log("Task added.");
    }
    else if(req == "delete"){
        let idx = prompt("Please enter your task index you want to delete:");
        todo.splice(idx,1);
        console.log("Task deleted.");

    }else{
        console.log("Invalid request. Please try again.");
    }
    
    req = prompt("Please enter your request(add,delete,quit,list): ");
}