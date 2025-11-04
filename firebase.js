// Firebase client init (v9 modular)
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function saveMessage(name, phone, message){
  const col = collection(db, 'messages')
  const doc = await addDoc(col, { name, phone, message, createdAt: new Date().toISOString() })
  return doc.id
}

export async function fetchMessages(){
  const col = collection(db, 'messages')
  const q = query(col, orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function addProduct(product){
  const col = collection(db, 'products')
  const doc = await addDoc(col, { ...product, createdAt: new Date().toISOString() })
  return doc.id
}

export async function fetchProducts(){
  const col = collection(db, 'products')
  const q = query(col, orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}
