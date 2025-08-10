const admin = require("firebase-admin");
const serviceAccount = require("./firemasetest-firebase-adminsdk-fbsvc-211e7faab4.json"); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// масив або об'єкт даних
const data = [
  {
    id: "1",
    description:
      "Подорожувати Європою, відвідуючи історичні міста та пробуючи місцеву кухню",
    year: 2027,
    friend: "Олексій",
  },
  {
    id: "2",
    description: "Відкрити власну кав’ярню з унікальним дизайном",
    year: 2028,
    friend: "Марія",
  },
  {
    id: "3",
    description: "Пробігти марафон у Нью-Йорку",
    year: 2026,
    friend: "Ігор",
  },
];

// імпортуємо в колекцію "users"
// data.forEach(async (item) => {
//   await db.collection("dream").doc(item.id).set(item);
// });
(async () => {
  for (const item of data) {
    await db.collection("dream").doc(item.id).set(item);
  }
  console.log("✅ Імпорт завершено");
})();


console.log("✅ Імпорт завершено");

