import React, { useState } from 'react';

import { Container, SignIN } from '../styles';
import { Button } from '~/styles/components/Button';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <SignIN onSubmit={handleSubmit}>
        <h1>Boas vindas</h1>

        <span>NOME</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={text => setName(text.target.value)}
        />
        <span>E-MAIL</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={text => setEmail(text.target.value)}
        />
        <span>SENHA</span>
        <input
          type="text"
          name="password"
          value={password}
          onChange={text => setPassword(text.target.value)}
        />

        <Button size="big" type="submit">
          CADASTRAR
        </Button>
      </SignIN>
    </Container>
  );
}

export default SignUp;
