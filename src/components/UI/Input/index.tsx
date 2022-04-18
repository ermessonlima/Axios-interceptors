import { InputField } from './styles'

export default function Input(props: any) {
   return(
      <InputField
         onChange={props.onChange}
      type={props.type} placeholder={props.placeholder}/>
   )
}