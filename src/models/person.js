const mongoose = require("../config/database"); // Import connection

// Define Person Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  age: { type: Number }, // Age field
  favoriteFoods: { type: [String] } // Array of favorite food items
});

// Create Model
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
// This code defines a Mongoose model for a "Person" entity with fields for name, age, and favorite foods.

const createManyPeople = async () => {
  try {
    const peopleArray = [
      { name: "Alice", age: 25, favoriteFoods: ["Sushi", "Salad"] },
      { name: "Bob", age: 28, favoriteFoods: ["Steak", "Pasta"] },
      { name: "Mary", age: 35, favoriteFoods: ["Burritos", "Tacos"] }
    ];

    const savedPeople = await Person.create(peopleArray);
    console.log("✅ Many people saved:", savedPeople);
  } catch (error) {
    console.error("❌ Error saving multiple people:", error);
  }
};

createManyPeople();
