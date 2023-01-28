import { initializeApp } from 'firebase/app';

import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
} from 'firebase/firestore';

export function fbInit() {

    const firebaseConfig = {
        apiKey: "AIzaSyC9BOhni7DqxWo6eODal8-FNBwQdp1y_ZY",
        authDomain: "wherearetheheoroes.firebaseapp.com",
        projectId: "wherearetheheoroes",
        storageBucket: "wherearetheheoroes.appspot.com",
        messagingSenderId: "827845350347",
        appId: "1:827845350347:web:76eaef419a3db2ca8f5c4e"
    };

    const app = initializeApp(firebaseConfig);

}

export async function saveTime(name, time) {
    try {
      await addDoc(collection(getFirestore(), 'leaderboard'), {
        name: name,
        time: time
      });
    }
    catch(error) {
      console.error(error);
    }
}

export function loadTimes() {

    let loadData = new Promise(function(resolve) {

        let dataArray = [];
  
      const times = query(collection(getFirestore(), 'leaderboard'), orderBy('time', 'asc'), limit(10));
      
       onSnapshot(times, function(snapshot) {
        
        snapshot.docChanges().forEach(function(change) {
            var data = change.doc.data();
            dataArray.push(data);   
        });
      });
  
      resolve(dataArray);
      
    });

    return loadData;
}