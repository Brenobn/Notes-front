import { Container, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/Brenobn.png" 
          alt="Foto de perfil do github" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Breno Leonardo</strong>
        </div>
      </Profile>
    </Container>
  );
}