import './config';
import {dataBase} from './config'
import {collection, addDoc, getDoc, doc, query, where, getDocs, setDoc} from 'firebase/firestore';
var usersCollection = "users"



async function addDocument (myCollection, data){
    const docRef = await addDoc(collection(dataBase, myCollection), data)
    .catch(async (e)=> {
        await Promise.reject(e);
    })
    return docRef;
}

async function setDocument (myCollection, data, id){
    const docRef = await setDoc(doc(dataBase,myCollection,id), data)
    .catch(async (e)=>{
        await Promise.reject(e);
    })
}

export async function setUser(data, id){
    const userRef = await setDocument(usersCollection, data, id)
    .catch(async (e) => {
        await Promise.reject(e);
    })
    return {userRef, id};

}

export async function searchUser(user){
    let userRes;
    let users;
    let q = query(collection(dataBase, usersCollection), where("username","==", user))
    let querySnapshot = await getDocs(q)
    userRes = querySnapshot.docs;
    users=userRes.map((doc)=>doc.data())
    return new Promise ((resolve, reject) =>{
        if(userRes.length > 0){
            resolve (users);
        }else {
            reject({code:"01", message:"Ya existe ese username, elige otro"});
        }
    })
}

