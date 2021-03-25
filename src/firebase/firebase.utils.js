import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import { fireEvent } from '@testing-library/react';

const config = 
{
    apiKey: "AIzaSyAkG27usnFefP7xxRPM67zvrg0_bQUF8-c",
    authDomain: "udemyecom17.firebaseapp.com",
    projectId: "udemyecom17",
    storageBucket: "udemyecom17.appspot.com",
    messagingSenderId: "134245297130",
    appId: "1:134245297130:web:07aa0020d93716b7bf2093"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{ // insertando usuario a la db

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); // aca obtengo el documento la referencia

    const snapShot =  await userRef.get() // aca con el get obtengo el snapshot

    console.log(snapShot)

    if(!snapShot.exists){
      const {displayName, email}= userAuth; // necesito estos datos de mi userAuth que es el objeto que me entrega el firebase, y los destructuro para obtenerlos
      const createdAt = new Date(); // plain javascript to get current date
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData

        }) // aca adentro destructurando, el objeto que le pasare para hacer el set, y ahi includo el ... aditionalData... es el objeto con data adicional que le estare pasando

      }catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;

    // el firebase retorna 2 tipos de objetos el reference y el snapshot
    // recuerda que para crear objetos en la base de datos usamos el document reference no podemos visualizar data con este solo CRUD y referencias
    // cuando obtenemos datos de la base de datos, usamos el snapshot para visualizar la data se usa snapshot

  }



  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  const provider2 = new firebase.auth.FacebookAuthProvider();

  provider.setCustomParameters({promt: 'select_account'});
  provider2.setCustomParameters({promt: 'select_account'});
  export const signInWithFacebook = () => auth.signInWithPopup(provider2);
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;