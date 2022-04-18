import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
   ContainerMain,
   MainTitle,
   DecotaredFor,
   H3ForgotPassword,
   ContainerForm
} from './styles'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { Auth } from '../../shared/services';

export const Login = () => {

   const [email, setEmail] = useState('ermessonlimadossantos@hotmail.com')
   const [password, setPassword] = useState('123456')

   const { Login } = Auth()



   const login = async (event: any) => {
      event?.preventDefault()
      console.log('email: ', email)
      console.log('password: ', password)
      console.log('fdfd')
      await Login({ email, password }).then(res => { console.log(res) })

   }

   return (
      <ContainerMain>
         <div style={{ marginRight: 260 }}>
            <MainTitle>
               The <br />
               Greatest <br />
               App <br />
               <DecotaredFor>for</DecotaredFor> <br />
               LOTTERY
            </MainTitle>
         </div>
         <div style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 25 }}>Authentication</h2>
            <ContainerForm onSubmit={login} >
               <Input
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
               />
               <Input
                  onChange={(e: any) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Password" />
               <H3ForgotPassword>I forgot my password</H3ForgotPassword>
               <Button
                  type="submit"

                  color={'#B5C401'}>Log in <FiArrowRight style={{ marginBottom: -6 }} />
               </Button>
            </ContainerForm>

            <Button
               onClick={login}
               color={'#707070'}>Sign Up <FiArrowRight style={{ marginBottom: -6 }} /></Button>
         </div>
      </ContainerMain>
   )
}