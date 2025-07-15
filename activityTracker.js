// activityTracker.js
// GitHub repo: https://github.com/gonzalezjulio01/cs81-module5b-weektracker

const myWeek = [
  { day: "Monday", activity: "part-time job", category: "work", hoursSpent: 6, enjoyment: 3, timeOfDay: "afternoon" },
  { day: "Tuesday", activity: "part-time job", category: "work", hoursSpent: 6, enjoyment: 3, timeOfDay: "afternoon" },
  { day: "Wednesday", activity: "part-time job", category: "work", hoursSpent: 6, enjoyment: 3, timeOfDay: "afternoon" },
  { day: "Thursday", activity: "part-time job", category: "work", hoursSpent: 6, enjoyment: 3, timeOfDay: "afternoon" },
  { day: "Friday", activity: "playing video games", category: "entertainment", hoursSpent: 2, enjoyment: 9, timeOfDay: "evening" },
  { day: "Saturday", activity: "hanging out with friends", category: "social", hoursSpent: 2.5, enjoyment: 9, timeOfDay: "evening" },
  { day: "Sunday", activity: "family hangout", category: "social", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "evening" }
];

// Predictions:
// Saturday will probably have the highest enjoyment (friends + chill).
// "Work" will be the most common category since I work Monday–Thursday.
// Evening stuff might have better enjoyment than afternoon activities.

// Total hours spent on work
function totalWorkHours(data) {
  return data
    .filter(act => act.category === "work")
    .reduce((sum, act) => sum + act.hoursSpent, 0);
}

// Average enjoyment score for evening activities
function averageEveningEnjoyment(data) {
  const eveningActs = data.filter(act => act.timeOfDay === "evening");
  const total = eveningActs.reduce((sum, act) => sum + act.enjoyment, 0);
  return (total / eveningActs.length).toFixed(1);
}

// Custom higher-order function: filter by any condition
function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}

// Example use: low time, high enjoyment activities
const chillThings = filterByCondition(act => act.hoursSpent < 3 && act.enjoyment >= 8);

// Logs
console.log("Total hours spent working:", totalWorkHours(myWeek));
console.log("Average enjoyment (evening):", averageEveningEnjoyment(myWeek));
console.log("Chill, fun activities:", chillThings.map(act => act.activity));
