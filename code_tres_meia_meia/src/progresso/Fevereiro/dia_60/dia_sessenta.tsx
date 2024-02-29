import { useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  idade: number;
}

export default function EmailForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IFormInput>();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          alignItems: "center",
        }}
      >
        <input
          type="email"
          placeholder="digite seu e-mail"
          {...register("email", {
            required: "O campo é obrigatório.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um e-mail válido.",
            },
            maxLength: {
              value: 256,
              message: "E-mail deve ter no máximo 256 caracteres",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          placeholder="digite sua idade"
          type="number"
          {...register("idade", {
            required: "O campo é obrigatório.",
            min: {
              value: 0,
              message: "Idade deve ser maior ou igual a 0.",
            },
            max: {
              value: 125,
              message: "Idade deve ser menor ou igual a 125.",
            },
          })}
        />
        {errors.idade && <p>{errors.idade.message}</p>}
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
