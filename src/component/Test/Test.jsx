
import React from "react";
import { readFromDB, writeToDB } from "../../service/firebase";

function TestComponent() {

    const handleSendData = () => {
        const testData = {
            firstName: 'Arjun',
            lastName: 'Jaishi',
            email: 'someone@example.com'
        }
        writeToDB('test_data', testData)
            .then(res => { if (res) { alert('Data Write Successful!') } })
            .catch(err => console.log('Following Error Occured:\t:', err.message));
    }

    const loadData = async () => {
        const users = await readFromDB('test_data');
        console.log(users);
    }


    return (

        <div>
            <h1 style={{ fontFamily: 'Cartograph CF' }}>Sending Test Data to Firebase Database</h1>
            <button onClick={handleSendData}>Send Data</button>
            <button onClick={loadData}>Load Data</button>
        </div>

    );
}

export default TestComponent;