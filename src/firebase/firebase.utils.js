import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBBKGLlh6SmLcjX1FDTnPCkBT1TNKLwHpQ',
	authDomain: 'crown-clothing-6aaca.firebaseapp.com',
	databaseURL: 'https://crown-clothing-6aaca.firebaseio.com',
	projectId: 'crown-clothing-6aaca',
	storageBucket: 'crown-clothing-6aaca.appspot.com',
	messagingSenderId: '276277805679',
	appId: '1:276277805679:web:9ad61b1e82b4da5e42439a',
	measurementId: 'G-BYG6WJ1YDC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
