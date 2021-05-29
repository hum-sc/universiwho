import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import './config'
let user;

const auth = getAuth();

export async function signUp(email, password){
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        user=userCredentials.user;
        console.log(user)
    })
    .catch (async (e) => {
        await Promise.reject(e);
    })

    return user; 
}

export async function setLogIn(email, password){
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCre)=>{
        user=userCre.user
        console.log(user)
    })
    .catch(async (e)=>{
        console.log(e)
        await Promise.reject(e)
    })
    return user;
}


export async function getCurrentUser(){
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if(auth){
                unsubscribe();
                resolve(user);
            }
        },(error)=> reject(error));
    });
}

export function setSignOut(){
    signOut(auth)
}