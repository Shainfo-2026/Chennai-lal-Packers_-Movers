import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqomEmWwiT3CXEOD4mkYEOrM9N3PkoKDc",
  authDomain: "chennai-lal-reviews.firebaseapp.com",
  projectId: "chennai-lal-reviews",
  storageBucket: "chennai-lal-reviews.firebasestorage.app",
  messagingSenderId: "908801097657",
  appId: "1:908801097657:web:86372ad8af6a759be3c068",
  measurementId: "G-3J711SPFYQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);