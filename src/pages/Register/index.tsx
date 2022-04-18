import {useState} from 'react'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import {
   ContainerMain, 
   MainTitle, 
   DecotaredFor,
   ContainerForm
} from './styles'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { createUser } from '../../shared/services';

export const Register = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const { CreateNewUser } = createUser();

   const registerUser = async (event:any) => {
      event?.preventDefault()
      console.log('email: ', email)
      console.log('password: ', password)
      console.log('name: ', name)
      await CreateNewUser({name, email, password}).then(res => {console.log(res)})

   }

   return(
      <ContainerMain>
         <div style={{marginRight: 260}}>
            <MainTitle>
               The <br />
               Greatest <br />
               App <br />
               <DecotaredFor>for</DecotaredFor> <br />
               LOTTERY
            </MainTitle>
         </div>
         <div style={{textAlign: 'center'}}>
            <h2 style={{textAlign: 'center', marginBottom: 25}}>Reset password</h2>
            <ContainerForm onSubmit={registerUser} >
               <Input
                onChange={(e:any) => setName(e.target.value)}
                value={name}
               type="text"
                placeholder="Name" />
               <Input
                onChange={(e:any) => setEmail(e.target.value)}
                value={email}
               type="email" 
               placeholder="Email" />
               <Input
                onChange={(e:any) => setPassword(e.target.value)}
                value={password}
               type="password" 
               placeholder="Password" />
               <Button type="submit" color={'#B5C401'}>Register <FiArrowRight style={{marginBottom: -6}} /></Button>
            </ContainerForm>
            <Button color={'#707070'}><FiArrowLeft style={{marginBottom: -6}} /> Back</Button>
         </div>
      </ContainerMain>
   )
}