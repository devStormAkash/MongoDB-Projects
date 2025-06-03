use("OnlineEducation");
db.createCollection("courses");
db.courses.insertOne({
  name: "JavaScript by Hitesh Choudhary",
  price: 499,
  course_duration: "3 years",
  mode: "online",
  isIndustryRelevant: true,
});

// Create in MongoDB

db.courses.insertMany([
  {
    name: "JavaScript by Hitesh Choudhary",
    price: 499,
    course_duration: "3 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "Visual Basic by Alan Cooper",
    price: 2499,
    course_duration: "10 years",
    mode: "offline",
    isIndustryRelevant: false,
  },
  {
    name: "Python for Everybody by Dr. Chuck",
    price: 899,
    course_duration: "2 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "C++ Masterclass by Bjarne Stroustrup",
    price: 1299,
    course_duration: "4 years",
    mode: "offline",
    isIndustryRelevant: true,
  },
  {
    name: "Full Stack Web Dev by Angela Yu",
    price: 1099,
    course_duration: "1.5 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "React Native Bootcamp by Max Schwarzmüller",
    price: 1499,
    course_duration: "2 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "Node.js Crash Course by Brad Traversy",
    price: 699,
    course_duration: "1 year",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "Java Essentials by James Gosling",
    price: 1999,
    course_duration: "5 years",
    mode: "offline",
    isIndustryRelevant: true,
  },
  {
    name: "Data Structures in C by Akash Giri",
    price: 799,
    course_duration: "2.5 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "Android Dev with Kotlin by Google",
    price: 1299,
    course_duration: "3 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "UI/UX Fundamentals by Steve Krug",
    price: 999,
    course_duration: "2 years",
    mode: "offline",
    isIndustryRelevant: false,
  },
  {
    name: "Cybersecurity Basics by IBM",
    price: 1599,
    course_duration: "2 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "AI for Beginners by Andrew Ng",
    price: 1199,
    course_duration: "1 year",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "DevOps Toolkit by Kelsey Hightower",
    price: 1899,
    course_duration: "3 years",
    mode: "offline",
    isIndustryRelevant: true,
  },
  {
    name: "Swift Programming by Apple",
    price: 999,
    course_duration: "2.5 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "Machine Learning by Stanford",
    price: 2499,
    course_duration: "4 years",
    mode: "online",
    isIndustryRelevant: true,
  },
  {
    name: "Blockchain Basics by Vitalik Buterin",
    price: 2199,
    course_duration: "2 years",
    mode: "offline",
    isIndustryRelevant: true,
  },
]);

// Read in DataBase
let a = db.courses.find({ price: { $gte: 1000 } });
// console.log(a);

console.log(a.toArray());
console.log(a.count());

let b = db.courses.find({ price: { $gte: 1000 } });
console.log(b); // Returns the first document satisfying this condition

// Update the DataBase

db.courses.updateOne(
  { name: "JavaScript by Hitesh Choudhary" },
  { $set: { name: "I am RCB fan" } }
); // Update first documents matching the condition
db.courses.updateMany(
  { name: "JavaScript by Hitesh Choudhary" },
  { $set: { name: "I am RCB fan" } }
); // Update all documents matching the condition

// Delete in Datbase

db.courses.deleteOne({ price: { $gte: 299 } }); // Delete first documents matching the condition
db.courses.deleteMany({ price: { $gte: 1299 } }); // Delete all documents matching the condition
