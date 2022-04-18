import { Title } from './styles';
import { FiArrowRight } from 'react-icons/fi';

export default function Header() {
  return (
    <div style={{display: 'flex', width: '70%', justifyContent: 'space-between'}}>
      <Title>Header</Title>
      <h2>Account</h2>
      <h2>Sair <FiArrowRight /></h2>
    </div>
  )
}