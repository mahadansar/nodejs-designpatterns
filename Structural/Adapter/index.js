var localStorage = require("./LocalStorage");

console.log("localStorage length: ", localStorage.length);

var uid = localStorage.getItem("user_id");

console.log("user_id: ", uid);

if (!uid) {
  console.log("User ID not found. Setting the user id and token...");
  localStorage.setItem("token", "sda79FSFA87sS7fSF9f7S60S0");
  localStorage.setItem("user_id", "12345");
} else {
  console.log("User ID found. ", uid);
  console.log("Clearing the User ID...");
  localStorage.clear();
}
