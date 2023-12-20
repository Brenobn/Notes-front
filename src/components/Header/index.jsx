import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl} 
          alt="Foto de perfil do github" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Breno Leonardo</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}