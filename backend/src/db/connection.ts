import { connect, disconnect } from 'mongoose';

async function connectToDatabase(DB_HOST: any ) {
    try {
        await connect (DB_HOST);
    }
    catch (error){ 
        throw new Error("Cannot connect to database");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        throw new Error("Could not disconnect from database");
    }
} 

export {connectToDatabase, disconnectFromDatabase}
