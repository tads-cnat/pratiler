import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

/* Components */
import { Header } from "../Global/HeaderGlobal";

const schema = yup.object().shape({
  comentario: yup.string(),
  livro_id: yup
    .number()
    .required("Campo obrigatório")
    .min(1, "Campo obrigatório"),
});

export function RealizarAvaliacao() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [livros, setLivros] = useState([]);
  const [nota, setNota] = useState(0);

  async function fetchLivros() {}

  async function submitAvaliacao(data) {}

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(submitAvaliacao)}>
        <div>
          <label htmlFor="comentario">Comentário</label>
          <textarea id="comentario" {...register("comentario")} />
          {errors.comentario && <span>{errors.comentario.message}</span>}
        </div>

        <button type="submit">Enviar Avaliação</button>
      </form>
    </>
  );
}
