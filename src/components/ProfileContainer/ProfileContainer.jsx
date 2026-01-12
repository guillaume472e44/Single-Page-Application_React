import { useParams } from 'react-router-dom'
import Profile from '../../pages/Profile/Profile'

export default function ProfileContainer() {
  const { id } = useParams()
  return <Profile id={id} />
}

// Permet de faire passer un paramètre lorsque l'on utilise des class et non des fonctions
