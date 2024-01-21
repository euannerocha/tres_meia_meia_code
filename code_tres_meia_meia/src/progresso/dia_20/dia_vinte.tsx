//Ideia
//React + Typescript: Criar um formulário simples.

import React, { useState } from 'react';

interface LoginFormState {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {

  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuário:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
