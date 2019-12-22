import React from 'react';


export const categories = [
  { id: 1, name: "Beginner", level: 1 },
  { id: 2, name: "Intermediate", level: 2 },
  { id: 3, name: "Advanced", level: 3 }
];

export const calendar = [
  {
    id: 1,
    day: 1,
    workouts: [1, 2],
    required: true,
    category: 1
  },
  {
    id: 2,
    day: 2,
    workouts: [2, 3],
    required: true,
    category: 1
  },
  {
    id: 3,
    day: 3,
    workouts: [3, 1],
    required: true,
    category: 1
  },
  {
    id: 4,
    day: 4,
    workouts: [1, 3, 1],
    required: true,
    category: 1
  },
  {
    id: 5,
    day: 5,
    workouts: [1, 4],
    required: false,
    category: 1
  },
  {
    id: 6,
    day: 6,
    workouts: [1, 5],
    required: true,
    category: 1
  },
  {
    id: 7,
    day: 7,
    workouts: [],
    required: true,
    category: 1
  },
  {
    id: 8,
    day: 1,
    workouts: [1, 2],
    required: true,
    category: 2
  },
  {
    id: 9,
    day: 2,
    workouts: [2, 3],
    required: false,
    category: 2
  },
  {
    id: 10,
    day: 3,
    workouts: [3, 1],
    required: true,
    category: 2
  },
  {
    id: 11,
    day: 4,
    workouts: [1, 3, 1],
    required: true,
    category: 2
  },
  {
    id: 12,
    day: 5,
    workouts: [1, 4],
    required: true,
    category: 2
  },
  {
    id: 13,
    day: 6,
    workouts: [1, 5],
    required: true,
    category: 2
  },
  {
    id: 14,
    day: 7,
    workouts: [],
    required: true,
    category: 2
  },
  {
    id: 15,
    day: 1,
    workouts: [1, 2],
    required: true,
    category: 3
  },
  {
    id: 16,
    day: 2,
    workouts: [2, 3],
    required: false,
    category: 3
  },
  {
    id: 17,
    day: 3,
    workouts: [3, 1],
    required: true,
    category: 3
  },
  {
    id: 18,
    day: 4,
    workouts: [1, 3, 1],
    required: true,
    category: 3
  },
  {
    id: 19,
    day: 5,
    workouts: [1, 4],
    required: true,
    category: 3
  },
  {
    id: 20,
    day: 6,
    workouts: [1, 5],
    required: false,
    category: 3
  },
  {
    id: 21,
    day: 7,
    workouts: [],
    required: true,
    category: 3
  }
];

export const workouts = [
  {
    id: 1,
    title: "Stretching",
    videoUrl:
      "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
    difficulty: 1,
    calories: 120,
    totalTime: 600000,
    description:
     <div><p>In this exercise we are going to work on your flexibility.</p><ul><li>exercise 1</li><li>exercise 2</li><li>exercise 3</li></ul></div>
  },
  {
    id: 2,
    title: "Strenght",
    videoUrl:
      "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
    difficulty: 1,
    calories: 120,
    totalTime: 600000,
    description:
      <div><p>In this exercise we are going to work on your strenght.</p><ul><li>exercise 1</li><li>exercise 2</li><li>exercise 3</li></ul></div>
  },
  {
    id: 3,
    title: "Cardio",
    videoUrl:
      "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
    difficulty: 1,
    calories: 120,
    totalTime: 600000,
    description:
      <div><p>In this exercise we are going to work on your durability.</p><ul><li>exercise 1</li><li>exercise 2</li><li>exercise 3</li></ul></div>
  },
  {
    id: 4,
    title: "Legs",
    videoUrl:
      "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
    difficulty: 1,
    calories: 120,
    totalTime: 600000,
    description:
      <div><p>In this exercise we are going to work on your movibility.</p><ul><li>exercise 1</li><li>exercise 2</li><li>exercise 3</li></ul></div>
  },
  {
    id: 5,
    title: "Abdominals",
    videoUrl:
      "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
    difficulty: 1,
    calories: 120,
    totalTime: 600000,
    description:
      <div><p>In this exercise we are going to work on your core.</p><ul><li>exercise 1</li><li>exercise 2</li><li>exercise 3</li></ul></div>

  }
];

export const users = [
  {
    id: 1,
    firstName: "Jon",
    lastName: "Snow",
    emailAddress: "winteriscoming@got.com",
    password: "12345678",
    startDate: "2019-11-06",
    categoryIds: [1, 2],
    imageUrl:
      "https://img.buzzfeed.com/buzzfeed-static/static/2019-01/4/12/asset/buzzfeed-prod-web-06/sub-buzz-4788-1546623252-1.jpg"
  }
];
