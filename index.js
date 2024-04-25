import express  from "express";
import initApp from "./src/modules/app.router.js";
import 'dotenv/config';
const app = express();
initApp(app,express);

app.listen(process.env.PORT || 7000,()=>{
    console.log("server is running ... ");
})