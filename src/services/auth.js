import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import './config'

const auth = getAuth();
    let errorCode;
    let errorMessage;
    let user;

export function signUp(email, password){
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        user =   userCredential.user;
    })
    .catch((error)=>{
         errorCode = error.code;
         errorMessage = error.message;
        
    });
    return{
        user:user,
        errorCode:errorCode,
        errorMessage:errorMessage
    }
}