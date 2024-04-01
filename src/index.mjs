import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(201).send("Hello World");
});

app.get("/about", (request, response) => {
  response.status(201).send("about me");
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, username: "beki", name: "beki" },
    { id: 2, username: "ofi", name: "ofi" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
