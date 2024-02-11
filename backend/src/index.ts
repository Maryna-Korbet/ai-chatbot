import app from "./app.js"; 
import { connectToDatabase } from "./db/connection.js";

const {DB_HOST, PORT} = process.env;

connectToDatabase(DB_HOST)
    .then(()=>{
        app.listen(PORT || 5000, ()=> console.log("Server connected"));
    })
    .catch(error => {  
        return console.log("error connectToDatabase:", error);
    })
