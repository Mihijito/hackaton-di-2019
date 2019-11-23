import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

export default {
  name: 'Firebase'
};

const firebaseConfig = {
  apiKey: 'AIzaSyDMxmT21L2hvDFczL5g7zIguV5zvBArU6E',
  authDomain: 'hackathon-di-2019.firebaseapp.com',
  databaseURL: 'https://hackathon-di-2019.firebaseio.com',
  projectId: 'hackathon-di-2019',
  storageBucket: 'hackathon-di-2019.appspot.com',
  messagingSenderId: '416141626942',
  appId: '1:416141626942:web:aa48700543744535c10b6f',
  measurementId: 'G-BD7EF4ST0M'
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref('users/' + 'userId').set({
  starCount: 0,
  email: 'email',
  profile_picture: 'imageUrl'
});
export var starCountNumber;

var starCountRef = firebase.database().ref('user/userId/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(snapshot.val());
});

function updateStarCount(value) {
  starCountNumber = value;
}

export function addStar() {
  console.log('this is called');
  var updates = {};
  updates['user/userId/starCount'] = starCountRef.snapshot.val();
  return database.ref().update(updates);
}
