import './config';
import {dataBase} from './config'
import {collection, addDoc, getDoc, doc, query, where, getDocs, setDoc, limit, orderBy, updateDoc} from 'firebase/firestore';
var usersCollection = "users";
var schoolsCollection = "schools";




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

export async function searchSchool(school){
    let schoolRes;
    let schools;
    let q = query(collection(dataBase, schoolsCollection), where("name","==", school));
    let querySnapshot = await getDocs(q)
    
    schoolRes = querySnapshot.docs;
    schools=schoolRes.map((doc)=>doc)
    return new Promise ((resolve, reject) =>{
        if(schoolRes.length > 0){
            resolve (schools);
        }else {
            reject("No se encontro");
        }
    })
}

export async function getSchools(){
    let schoolRes;
    let schools;
    let q = query(collection(dataBase, schoolsCollection),orderBy("cal"), limit(25));
    let querySnapshot = await getDocs(q);
    schoolRes = querySnapshot.docs;
    schools=schoolRes.map((doc)=>doc.data())
    return new Promise ((resolve, reject) =>{
        if(schoolRes.length > 0){
            resolve (schools);
        }else {
            reject("No se encontraron resultados");
        }
    })
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
            reject("Ya existe ese username, elige otro");
        }
    })
}


export async function setSchool(school){

    return new Promise((resolve,reject)=>{
        searchSchool(school.name).then((data)=>{
            reject("Ya existe, porfavor da click en calificar")
        })
        .catch((e)=>{
           addDocument(schoolsCollection,school).then((doc)=>{
                console.log(doc);
            })
            .catch((e)=>{
                reject("error en el servidor, intenta mas tarde");
            })
        })

    })
}
export async function updateSchool(data){
    console.log(data.cal)
    return new Promise((resolve,reject)=>{
        searchSchool(data.name).then((response)=>{
            
            const res =response[0].data()
            

            const cal=(data.cal+(res.cal*res.time))/(res.time+1)
            console.log(cal)

    
            const ref=doc(dataBase, schoolsCollection,response[0].id)

            updateDoc(ref, {...data, cal:cal, time:res.time+1}).then((resp)=>{
                resolve("update");
            })
            .catch((e)=>{
                reject(e);
            })
        }).catch((e)=>{
            console.log(e)
            reject("No existe, favor de registrarla")
        })
    })
}



