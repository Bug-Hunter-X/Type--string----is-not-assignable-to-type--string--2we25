function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane User";
console.log(greeter(user)); //Correct

//Alternative solution: Modify the greeter function to accept an array of strings
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let users = ["Jane User", "John Doe"];
console.log(greeterArray(users));//Correct