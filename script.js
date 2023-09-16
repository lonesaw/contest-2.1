const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === "developer");
  console.log("Developers:", developers);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  
  const newData = { name, age, profession };
  data.push(newData);
  console.log("Data after adding:", data);
}

// 3. Remove Admins
function removeAdmin() {
  const filteredData = data.filter(person => person.profession !== "admin");
  console.log("Data after removing admins:", filteredData);
}

// 4. Concatenate Array
function concatenateArray() {
  const newData = [
    { name: "alice", age: 29, profession: "developer" },
    { name: "bob", age: 26, profession: "designer" },
  ];
  const concatenatedData = data.concat(newData);
  console.log("Concatenated data:", concatenatedData);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((acc, person) => acc + person.age, 0);
  const avgAge = totalAge / data.length;
  console.log("Average age:", avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some(person => person.age > 25);
  console.log("Any age above 25:", above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log("Unique professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  const sortedData = data.slice().sort((a, b) => a.age - b.age);
  console.log("Sorted data by age:", sortedData);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex(person => person.name === "john");
  if (johnIndex !== -1) {
    data[johnIndex].profession = "manager";
    console.log("Updated John's profession:", data);
  } else {
    console.log("John not found in the data.");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(person => person.profession === "developer").length;
  const adminCount = data.filter(person => person.profession === "admin").length;
  console.log("Developer count:", developerCount);
  console.log("Admin count:", adminCount);
}