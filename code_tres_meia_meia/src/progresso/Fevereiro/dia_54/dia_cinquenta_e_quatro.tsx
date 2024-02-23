import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email é obrigatório');
    } else if (!regex.test(email)) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Senha é obrigatória');
    } else if (password.length < 6) {
      setPasswordError('A senha deve ter no mínimo 6 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <div className="error">{emailError}</div>}
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
        />
        {passwordError && <div className="error">{passwordError}</div>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
