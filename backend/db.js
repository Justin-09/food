const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/goFooD";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const db = mongoose.connection;
    const collection = db.collection("food_items");
    const foodcollection = db.collection("food_category");
    const data = await collection.find({}).toArray();
    const catdata = await foodcollection.find({}).toArray();
    global.food_category = catdata;
    global.food_items = data;

    // console.log(global.food_items);
      // console.log(global.food_category);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
