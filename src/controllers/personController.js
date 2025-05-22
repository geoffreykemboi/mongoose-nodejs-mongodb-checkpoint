const Person = require("../models/person");

// Create and Save a Person
const createPerson = async () => {
  try {
    const person = new Person({ name: "John", age: 30, favoriteFoods: ["Pizza", "Burger"] });
    await person.save();
    console.log("✅ Saved:", person);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Create Many People
const createManyPeople = async () => {
  try {
    await Person.create([
      { name: "Alice", age: 25, favoriteFoods: ["Sushi", "Salad"] },
      { name: "Bob", age: 28 }
    ]);
    console.log("✅ Many People Created");
  } catch (error) {
    console.error("Error:", error);
  }
};

// Find People by Name
const findPeopleByName = async (name) => {
  try {
    const people = await Person.find({ name });
    console.log("✅ Found:", people);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Find One by Favorite Food
const findPersonByFood = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log("✅ Found:", person);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Find by `_id`
const findPersonById = async (id) => {
  try {
    const person = await Person.findById(id);
    console.log("✅ Found by ID:", person);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Update Favorite Foods by `_id`
const updateFavoriteFoods = async (id) => {
  try {
    const person = await Person.findById(id);
    if (!person) return console.log("Person Not Found");

    person.favoriteFoods.push("Hamburger");
    await person.save();
    console.log("✅ Updated Foods:", person);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Update Age Using `findOneAndUpdate()`
const updateAgeByName = async (name) => {
  try {
    const updatedPerson = await Person.findOneAndUpdate({ name }, { age: 20 }, { new: true });
    console.log("✅ Updated Age:", updatedPerson);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Delete One by `_id`
const deletePersonById = async (id) => {
  try {
    await Person.findByIdAndDelete(id);
    console.log("✅ Deleted");
  } catch (error) {
    console.error("Error:", error);
  }
};

// Delete Many with `Model.deleteMany()`
const deleteManyPeople = async () => {
  try {
    await Person.deleteMany({ name: "Mary" });
    console.log("✅ Deleted Many");
  } catch (error) {
    console.error("Error:", error);
  }
};

// Chain Query Helpers
const searchBurritoLovers = async () => {
  try {
    const results = await Person.find({ favoriteFoods: "Burritos" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age")
      .exec();
    console.log("✅ Filtered Results:", results);
  } catch (error) {
    console.error("Error:", error);
  }
};
