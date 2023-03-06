// fs
//  third party packages
// npm node package manager
import fs from "fs";
import chalk from "chalk";
import { promisify } from "util";
const readFilePromise = promisify(fs.readFile);

// sync version
// callback version

// callback promise
// console.log(fs.readFileSync("data.json", "utf-8"));
// fs.readFile("./database/data.json", "utf8", (err, data) => {
//     console.log(data);
// });
let user = {
    id: 2,
    name: "askldnaslknd",
};
// add new user to json file
// first we must read json file
// second we push new user into users array
// third write new array into json file
// user has id ,name,email
async function readUsersFromFile(filename, cp) {
    return await readFilePromise(filename, "utf-8");
}

async function addUserToFile(filename, name, email) {
    const users = JSON.parse(await readUsersFromFile(filename));
    let id = generateNewId(users);
    const user = {
        id,
        name,
        email,
    };
    users.push(user);
    writeUserIntoFile(filename, JSON.stringify(users));
}

function writeUserIntoFile(filename, users) {
    fs.writeFileSync(filename, users);
}

function generateNewId(users) {
    let id;
    if (!users.length) id = 1;
    else id = users[users.length - 1].id + 1;
    return id;
}

// let [name, email] = process.argv.slice(2);
// "--name=ahmed" [("--name", "ahmed")];
// name = name.split("=")[1];
// email = email.split("=")[1];
// addUserToFile("./database/data.json", name, email);

// yargs

// create crud operation for user