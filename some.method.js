const fullName = "sdf";
const username = "sdfsdf";
const email = "sdf";
const password = "sdaf";

console.log(fullName, username, email, password);

console.log(
  [fullName, username, email, password].some((field) => {
    console.log(field?.trim() === "");
  }),
);
