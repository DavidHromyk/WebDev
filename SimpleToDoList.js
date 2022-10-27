// Asks the user to input a command to start
let input = prompt("Please enter command to start");

// Empty array where the list will be stored later on by being pushed
let list = [];

// While the input from earlier is not 'quit' and not 'q' keep running the while loop code
while (input !== 'quit' && input !== 'q') {


    // checks if the input is 'new' if it is it will ask for an item to add and push it to the empty list array from earlier
    if (input === 'new') {
        const newToDo = prompt("Enter item!");
        list.push(newToDo);
        console.log(`${newToDo} added to list`);

    }

    // checks if the input is 'list' if it is it will console.log the list that is currently in the list array 
    else if (input === 'list') {
        console.log('***********')
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log('***********')
    }

    // if the input is delete it will prompt for a delete input and then find the indexOf the input. From there it will remove it using splice with the indexof the input and just 1 item.
    else if (input === 'delete') {

        const newDelete = prompt("What would you like to delete? Enter a name or index");
        const index = list.indexOf(newDelete)

        list.splice(index, 1)
        console.log(`You deleted ${newDelete}`);


    }

    // Keeps looping the program until quit is entered
    input = prompt("Please enter a command to start");
};
console.log('You quit the app!');


