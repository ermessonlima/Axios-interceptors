import { IBodyAuth } from "../../interfaces";
import instance from "../axios.config";

const Auth = () => {
   async function Login(body: IBodyAuth) {
      return instance.post('/login', body);
   }
   
   return {Login}
}

export default Auth;