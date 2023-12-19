import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut } = useAuth();

  return(
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/Brenobn.png" 
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