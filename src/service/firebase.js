import { getDatabase, ref, set, push, onValue } from 'firebase/database';
// import app from '../config/firebaseConfig';
import database from '../config/firebaseConfig';


export const writeToDB = async (collection, data) => {

    let isDateWriteSuccessful = false;

    // to save data to a specified reference, replacing any existing data at that path
    // return await set(ref(database, collection),data)
    // .then(() => {
    //     isDateWriteSuccessful = true;
    //     return isDateWriteSuccessful;
    // }).catch((err) => {
    //     console.log(err);
    //     return isDateWriteSuccessful;
    // });

    //to save list of data
    const userListRef = ref(database, collection)
    const newUserRef = push(userListRef);
    return await set(newUserRef, { data }).then(() => {
        isDateWriteSuccessful = true;
        return isDateWriteSuccessful;
    }).catch((err) => {
        console.log(err);
        return isDateWriteSuccessful;
    });
}



export const readFromDB = async (collection) => {

    return new Promise((resolve, reject) => {
        const dbRef = ref(database, collection);
        onValue(dbRef, (snapshot) => {
            const user = [];
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childValue = childSnapshot.val();
                user.push({
                    key: childKey,
                    value: childValue.data
                });
            });
            resolve(user)
        }, (error) => {
            reject(error)
        });
    });

}

// export default writeToDB;
