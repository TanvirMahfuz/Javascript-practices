try {
  console.log(harry);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  //avoid sending error.stack to the client
}
// Error is a class that can be extended to make new type of errors

class apiError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}
// throw new apiError("api error", "this is a custom error");

class fuck {
  constructor(name) {
    this.name = name;
  }
}
// throw new fuck("fuck");
//when an error is thrown, the execution of the code stops then and there
class curseNotAllowedError extends Error {
  constructor(message) {
    super(message);
    this.name = "curseNotAllowedError";
    this.stack = "";
  }
}
const curses = ["fuck", "shit", "asshole"];
let input = "not a single fuck was was given ";
//method : 1
// for (let curse of input.split(" ")) {
//   if (curses.includes(curse)) {
//     throw new curseNotAllowedError(`the word ${curse} was used `);
//   }
// }

// method: 2;
for (let curse of input.split(" ")) {
  try {
    if (curses.includes(curse)) {
      throw new curseNotAllowedError(`the word ${curse} was used `);
    }
  } catch (error) {
    console.log(error.message);
  }
}
