# 📚 CodeArena 🏆

**CodeArena** is a competitive coding battle platform where users can challenge each other in different coding modes, climb ranks, earn XP, join clans, and participate in clan wars. This platform supports real-time matches, a dynamic ranking system, and a clan system to build communities.

---

## 🚀 Features

* 🧑‍💻 User authentication and profile management
* 🏆 XP and rank progression system
* ⚔️ Match battles with three modes: `speed`, `efficiency`, `blind`
* 📊 Leaderboard to display top coders
* 👑 Clan creation and management
* 📚 Tagging system for categorizing coding problems
* 💬 Match history with details and stats
* 📈 Level-based progression alongside ranks
* ⏰ Match status: ongoing, completed, aborted, timeout
* 🌐 MongoDB + Mongoose based backend with Express.js

---

## 📂 Project Structure

```
backend/
├── db.js                  # MongoDB connection setup
├── Models/
│   ├── User.js            # User schema
│   ├── Match.js           # Match schema
│   ├── Clan.js            # Clan schema
│   ├── Question.js        # Coding problem schema
│   ├── Rank.js            # Rank and XP thresholds
│   ├── Level.js           # Level system
│   └── Tag.js             # Problem tags
├── routes/
│   ├── auth.js            # User authentication routes
│   ├── matches.js         # Match management routes
│   ├── clans.js           # Clan creation and management
│   └── leaderboard.js     # Leaderboard data
├── index.js               # Express server entry point
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT
* **Date & Time:** `toLocaleString` with `Asia/Kolkata` timezone
* **Version Control:** Git + GitHub

---

## ⚙️ How to Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/codearena.git
   cd codearena/backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with your MongoDB connection URI and JWT secret.

4. **Start the server**

   ```bash
   npm start
   ```

---

## 📊 Rank & XP System

| Rank        | XP Gain/Win | XP Threshold | Next Rank   |
| ----------- | ----------- | ------------ | ----------- |
| Bronze      | 300         | 3000         | Silver      |
| Silver      | 150         | 6000         | Gold        |
| Gold        | 110         | 10000        | Platinum    |
| Platinum    | 100         | 15000        | Diamond     |
| Diamond     | 100         | 21000        | Master      |
| Master      | 100         | 28000        | Grandmaster |
| Grandmaster | 20          | ∞            | -           |

---

## 📖 API Overview (Major Endpoints)

* `POST /api/auth/register` - User registration
* `POST /api/auth/login` - User login
* `POST /api/match/start` - Start a new match
* `GET /api/match/getMatches` - Fetch user's recent matches
* `POST /api/clan/createClan` - Create a new clan
* `GET /api/leaderboard` - Get leaderboard data

---

## 📌 Future Enhancements

* Real-time match making with Socket.io
* Clan wars and leaderboard
* In-app friend requests and messaging
* Admin dashboard for managing problems and users
* Scheduled coding contests

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/36c6a966-d0ab-4397-8663-fcf94c8fd4c8)

## Login
![image](https://github.com/user-attachments/assets/30a7d371-e176-4882-8425-5b805a63c8b2)

## Signup
![image](https://github.com/user-attachments/assets/7dcee58e-b0b6-44ec-a805-3194b294cfb5)

## Modes
![image](https://github.com/user-attachments/assets/c058aac5-e9d6-4975-97d9-d029206dbb74)

## Match
![image](https://github.com/user-attachments/assets/7ce9839c-0eda-4340-ba59-9b4eb602a5a3)

## TestCases
![image](https://github.com/user-attachments/assets/11bf6bfe-6780-4805-886d-38a03ce0ef3c)


## Loading
![image](https://github.com/user-attachments/assets/84227f63-0f33-40cf-be26-12efa4f2bc8d)

---

## ✨ Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)
