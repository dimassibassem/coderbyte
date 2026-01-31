# Frontend Challenges – Turborepo Monorepo

This repository contains a collection of **frontend coding challenges** implemented using modern web technologies. Each challenge lives in its own application under the `apps/` directory and can be run independently.

---

## 🧱 Tech Stack

* **Turborepo** – Monorepo management
* **Next.js** – React framework for web apps
* **React**
* **Tailwind CSS** – Styling
* **TypeScript**

---

## 📁 Repository Structure

```
root/
├── apps/
│   ├── text-search/        # Text Search challenge (Coderbyte)
│   └── ...
├── packages/               # Shared configs or utilities
├── turbo.json
├── package.json
└── README.md               # Root README (this file)
```

Each challenge:

* Is self-contained
* Can be run independently using Turborepo filters

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/dimassibassem/coderbyte
cd coderbyte
```

---

### 2️⃣ Install dependencies
 

```bash
pnpm install
```

---

## ▶️ Running a Specific Challenge

Each challenge is located under `apps/<challenge-name>`.

To run a specific challenge in development mode:

```bash
pnpm run dev --filter=<challenge-name>
```

Example:

```bash
pnpm dev --filter=text-search
```

Then open:

```
http://localhost:3000
```

---

## 🧪 Available Challenges

| Challenge Name | Description                                   | Tech              |
| -------------- | --------------------------------------------- | ----------------- |
| text-search    | Text search & highlight challenge (Coderbyte) | Next.js, Tailwind |

> New challenges will be added over time.

---

## 📌 Notes

* Challenges are intentionally scoped and focused
* Code favors clarity and correctness over over-engineering
* This repository is suitable for **technical interviews**, **coding assessments**, and **practice**

---

## 👤 Author

**Bassem Dimassi**

---
