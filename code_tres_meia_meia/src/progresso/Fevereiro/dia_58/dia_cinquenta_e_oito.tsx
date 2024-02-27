import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface IInputs {
  email: string;
}

export default function EmailValidation() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IInputs>();
  
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    console.log(data);
    setSubmittedValue(data.email);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: "Este campo é obrigatório!" })}
          aria-invalid={errors.email ? "true" : "false"}
          type="email"
          placeholder="Digite seu email"
        />
        <input type="submit" value="Submit" />
      </form>
      {submittedValue && <p>Seu email é: {submittedValue}</p>}
    </div>
  );
}
