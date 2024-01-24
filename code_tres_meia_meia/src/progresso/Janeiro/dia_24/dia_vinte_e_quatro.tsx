//Ideia
//TypeScript: Desenvolver um validador de formulário com tipos específicos para campos obrigatórios.

import React, { useState } from 'react';
import "./dia_vinte_e_quatro.css"

interface FormularioState {
  nome: string;
  email: string;
  mensagem: string;
}

interface ValidacaoState {
  nome: boolean;
  email: boolean;
  mensagem: boolean;
}

const Formulario: React.FC = () => {
  const [formulario, setFormulario] = useState<FormularioState>({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [validacao, setValidacao] = useState<ValidacaoState>({
    nome: true,
    email: true,
    mensagem: true,
  });

  const validarFormulario = () => {
    const novosEstadosDeValidacao: ValidacaoState = {
      nome: formulario.nome !== '',
      email: formulario.email !== '',
      mensagem: formulario.mensagem !== '',
    };

    setValidacao(novosEstadosDeValidacao);

    return Object.values(novosEstadosDeValidacao).every((valor) => valor);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validarFormulario()) {
      console.log('Formulário válido. Enviar para o servidor.');
    } else {
      console.log('Formulário inválido. Corrija os campos obrigatórios.');
    }
  };

  const handleChange = (campo: keyof FormularioState, valor: string) => {
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [campo]: valor,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={formulario.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
          />
        </label>
        {!validacao.nome && <span className="mensagem-erro">Campo obrigatório.</span>}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={formulario.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </label>
        {!validacao.email && <span className="mensagem-erro">Campo obrigatório.</span>}
      </div>

      <div>
        <label>
          Mensagem:
          <textarea
            value={formulario.mensagem}
            onChange={(e) => handleChange('mensagem', e.target.value)}
          />
        </label>
        {!validacao.mensagem && <span className="mensagem-erro">Campo obrigatório.</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
