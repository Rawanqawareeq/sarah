import connectDB from "../../DB/conniction.js";
import auth from "../middleware/auth.middleware.js";
import authRouter from "./auth/auth.router.js";
import MassageRouter from "./massage/massage.router.js";
import UserRouter from "./user/user.router.js";

const initApp = (app,express)=>{
   app.use(express.json());
   connectDB();
   app.get('/', (req, res) => {
      res.json('Hello World!');
    });    
   app.use('/auth',authRouter);
   app.use('/Massage',MassageRouter);
   app.use('/user',auth,UserRouter);
}
export default initApp;