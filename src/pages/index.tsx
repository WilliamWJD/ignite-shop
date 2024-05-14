import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: 10,
  border: 0,
  cursor: 'pointer',
})

export default function Home() {
  return <Button>Enviar</Button>
}
