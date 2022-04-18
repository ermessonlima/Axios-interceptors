import { Buttons } from './styles'

export default function Button(props: any) {
  return <Buttons {...props} style={{color: props.color}}>{props.children}</Buttons>;
}