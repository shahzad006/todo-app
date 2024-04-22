import inquirer from "inquirer";
let todos = [];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            message: "Select an operation",
            type: "list",
            choices: ["Add", "Update", "View", "Delecte"]
        });
        //**************** --ADD-- ****************//
        if (ans.select == "Add") {
            let addtodo = await inquirer.prompt({
                name: "todo",
                message: "Add item in the list",
                type: "input",
            });
            todos.push(addtodo.todo); // push to array
            todos.forEach(todo => console.log(todo));
        }
        //**************** --Update-- ****************//
        if (ans.select == "Update") {
            let updatetodo = await inquirer.prompt({
                name: "todo",
                message: "Update items in the list.",
                type: "list",
                choices: todos.map(item => item),
            });
            let addtodo = await inquirer.prompt({
                name: "tode",
                message: "Add item in the list",
                type: "input",
            });
            let newtodo = todos.filter(val => val !== updatetodo.todo);
            todos = [...newtodo, addtodo.tode];
            console.log(todos);
        }
        //**************** --View-- ****************//
        if (ans.select == "View") {
            console.log("***Todo list***");
            console.log(todos);
            console.log("* * * * * * * * * * * * * * *");
        }
        //**************** --Delete-- ****************//
        if (ans.select == "Delete") {
            let deletetodo = await inquirer.prompt({
                name: "todo",
                message: "Update items in the list.",
                type: "list",
                choices: todos.map(item => item),
            });
            let newtodo = todos.filter(val => val !== deletetodo.todo);
            todos = [...newtodo,];
            console.log(todos);
        }
    } while (true);
}
createtodo(todos); // Cell Function
