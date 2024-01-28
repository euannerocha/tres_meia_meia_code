//Ideia
//Desenvolver um validador de formulário com tipos específicos para campos obrigatórios.

import React, { useState } from 'react';

export interface Form {
  nome: string;
  email: string;
  idade: number;
}

interface FormularioComponentProps {
  onSubmit: (form: Form) => void;
}


const FormularioComponent: React.FC<FormularioComponentProps> = ({ onSubmit }) => {
  const [formulario, setFormulario] = useState<Form>({
    nome: '',
    email: '',
    idade: 0,
  });

  function validarFormulario(form: Form): string[] {
    const erros: string[] = [];
  
    if (!form.nome) {
      erros.push('Nome é um campo obrigatório.');
    }
  
    if (!form.email) {
      erros.push('Email é um campo obrigatório.');
    }
  
    if (form.idade === undefined || form.idade <= 0) {
      erros.push('Idade é um campo obrigatório e deve ser um número positivo.');
    }
  
    return erros;
  }

  const [erros, setErros] = useState<string[]>([]);

  const handleChange = (campo: keyof Form, valor: string | number) => {
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [campo]: valor,
    }));
  };

  const handleSubmit = () => {
    const novosErros = validarFormulario(formulario);
    setErros(novosErros);

    if (novosErros.length === 0) {
      onSubmit(formulario);
    }
  };

  return (
    <div>
      <label>
        Nome:
        <input type="text" value={formulario.nome} onChange={(e) => handleChange('nome', e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={formulario.email} onChange={(e) => handleChange('email', e.target.value)} />
      </label>
      <br />
      <label>
        Idade:
        <input type="number" value={formulario.idade} onChange={(e) => handleChange('idade', +e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Enviar</button>

      {erros.length > 0 && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <p>Erros:</p>
          <ul>
            {erros.map((erro, index) => (
              <li key={index}>{erro}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormularioComponent;

