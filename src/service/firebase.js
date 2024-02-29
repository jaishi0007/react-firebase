import { getDatabase, ref, set } from 'firebase/database';
import app from '../config/firebaseConfig';


const writeToDB = async (collection, data) => {

    let isDateWriteSuccessful = false;
    const realTimeDB = getDatabase(app);
    return await set(ref(realTimeDB, collection), data)
        .then(() => {
            isDateWriteSuccessful = true;
            return isDateWriteSuccessful;
        }).catch((err) => {
            console.log(err);
            return isDateWriteSuccessful;
        });

}

export default writeToDB;
