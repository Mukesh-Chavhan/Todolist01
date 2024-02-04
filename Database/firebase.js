import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs, getDocsFromCache } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBLn5wotHF6VAfyPOrTXrc-Rtkbqkx0BHY",
    authDomain: "next-firebase-56395.firebaseapp.com",
    projectId: "next-firebase-56395",
    storageBucket: "next-firebase-56395.appspot.com",
    messagingSenderId: "1004447138758",
    appId: "1:1004447138758:web:00738fa643726fbd0ee8c7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const myCollection = collection(db, 'task_collection');

async function add_task (task)  {

    const data = {
        key1: task,
    };

    const docRef = await addDoc(myCollection, data);
    console.log('Document added with ID:', docRef.id);


}
add_task("setup firebase")
export { add_task };