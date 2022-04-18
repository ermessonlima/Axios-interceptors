import { IBodyCreateUser } from "../../interfaces";
import instance from "../axios.config";

const createUser = () => {
   async function CreateNewUser(body: IBodyCreateUser) {
      console.log(body)
      return instance.post('/user/create', body);
   }
   
   return {CreateNewUser}
}

export default createUser;