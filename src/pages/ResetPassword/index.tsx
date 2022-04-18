import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import {
   ContainerMain, 
   MainTitle, 
   DecotaredFor,
   ContainerForm
} from './styles'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'

export const ResetPassword = () => {
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
            <ContainerForm>
               <Input type="email" placeholder="Email" />
               <Button type="submit" color={'#B5C401'}>Send link <FiArrowRight style={{marginBottom: -6}} /></Button>
            </ContainerForm>
            <Button color={'#707070'}><FiArrowLeft style={{marginBottom: -6}} /> Back</Button>
         </div>
      </ContainerMain>
   )
}