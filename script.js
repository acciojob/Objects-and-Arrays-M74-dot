const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
var team = players;
var team1 = [...players];
var cap1 = JSON.parse(JSON.stringify(person));

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
