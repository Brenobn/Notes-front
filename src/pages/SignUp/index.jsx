import { useState } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar sues links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar"  />

        <Link to="/" >
          Voltar para o login
        </Link>
      </Form>
    </Container>
  );
}