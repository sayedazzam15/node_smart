// fs
//  third party packages
// npm node package manager
// import chalk from "chalk";
import {
  readUsersFromFile,
  writeUserIntoFile,
} from "./helpers/filesystems.mjs";

import sayed from "./helpers/filesystems.mjs";
sayed.printMessage();
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

function generateNewId(users) {
  let id;
  if (!users.length) id = 1;
  else id = users[users.length - 1].id + 1;
  return id;
}

let [name, email] = process.argv.slice(2);
"--name=ahmed"[("--name", "ahmed")];
name = name.split("=")[1];
email = email.split("=")[1];
addUserToFile("./session1/database/data.json", name, email);

// yargs

// create crud operation for user
