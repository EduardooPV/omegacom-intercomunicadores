import { Title } from "@components/Title";
import React, { useEffect, useState } from "react";
import { LabelInput } from "./LabelInput";
import { Container, Content, FormContainer, Popup } from "./styles";

export function Form() {
  const [submitForm, setSubmitForm] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("resize", () => {
        setWidth(() => window.innerWidth);
      });
    }, [window]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitForm(true);

    setTimeout(() => {
      setSubmitForm(false);
    }, 5000); // 10 seconds
  }

  return (
    <Container>
      <Content>
        <div>
          {width > 1024 ? (
            <h2>Descubra o melhor intercomunicador para seu negócio!</h2>
          ) : (
            <Title>Fale conosco</Title>
          )}
        </div>
        <FormContainer onSubmit={(event) => handleSubmit(event)}>
          <LabelInput
            name="nome"
            type="text"
            label="Nome"
            placeholder="ex: Paulo André"
            mandatory
            required
          />
          <LabelInput
            name="email"
            type="email"
            label="E-mail"
            placeholder="ex: pauloandre@gmail.com"
            mandatory
            required
          />
          <LabelInput
            name="celular"
            type="text"
            label="Celular"
            placeholder="ex: (15) 98181-8181"
            mandatory
            required
          />
          <LabelInput
            name="mensagem"
            type="textarea"
            label="Mensagem"
            placeholder="Sua mensagem aqui..."
            mandatory
          />

          <button type="submit">ENVIAR</button>
        </FormContainer>
      </Content>

      {submitForm && (
        <Popup>
          <p>Obrigado pela mensagem</p>
          <p>Entraremos em contato!</p>
        </Popup>
      )}
    </Container>
  );
}
