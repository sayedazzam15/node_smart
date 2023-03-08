import http from "http";
import data from "./data.mjs";
const server = http.createServer((req, res) => {
  if (req.url == "/posts") {
    res.end(JSON.stringify(data.posts));
  } else if (req.url == "/users") {
    res.end(JSON.stringify(data.users));
  }
  //   res.write("ahmed");
  //   res.write("mohamed");
  //   res.write("menna");
  //   res.end(JSON.stringify({ message: "welcome from server" }));
});

server.listen(8000);

// http.get("http://pets-v2.dev-apis.com/pets", (res) => {
//   let response_data = "";
//   res.on("data", (chunk) => {
//     response_data += chunk;
//   });
//   res.on("end", () => {
//     console.log(JSON.parse(response_data));
//   });
// });
