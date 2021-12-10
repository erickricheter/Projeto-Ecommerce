import React from "react";
import { Button, Form, Input, notification, Select } from "antd";
import { Container, Sh1, Sp, Ssection } from "./styles";
import { SInput } from "../../Registration/FormRegistration/styles";
import { SformItem } from "../../../styles";

const styles = {
  customInput: { width: "100%", border: "2px solid black" },
};

export const ContactForm = () => (
  <div>
    <h1 className="alinhamento">Bem vindo! tire suas dúdidas com a gente!</h1>

    <Sh1>Vamos ver nossas perguntas frequentes antes de tudo?</Sh1>

    <Ssection>
      <ul>
        <li>
          <h2>Como fazer a troca de alimento corretamente?</h2>
          <p>
            Misture 25% da nova ração com 75% do antigo alimento. Vá aumentando
            a quantidade da nova ração e diminuindo a antiga gradativamente, num
            período de sete dias, até total aceitação por parte do pet
          </p>
        </li>
      </ul>
    </Ssection>

    <Ssection>
      <ul>
        <li>
          <h2>Como saber a porção ideal que devo oferecer ao pet?</h2>
          <p>
            Para definir a porção de frequência diária ideal para o pet, é
            recomendado contar com a ajuda de um especialista que irá definir
            isso com base nas características do pet.
          </p>
        </li>
      </ul>
    </Ssection>

    <Ssection>
      <ul>
        <li>
          <h2>Como eu faço para meu peixe se acostumar com o novo ambiente?</h2>
          <p>
            Peixes são animais muito delicados, por isso precisam muito cuidado.
            Se você passar o peixe diretamente para o aquário, pode fazer mal a
            seu amigo. Por isso, coloque o recipiente em que o peixe está
            alocado (geralmente um saquinho) dentro do aquário e vá, aos poucos,
            misturando a água.
          </p>
        </li>
      </ul>
    </Ssection>

    <Ssection>
      <ul>
        <li>
          <h2>Vocês vendem animais?</h2>
          <Sp>
            Nossa loja e contra a venda de animais, já que você está procurando
            um animalzinho porque não adota um? Tem tantos esperando um novo
            lar! Aqui esta alguns links para te ajudar nessa busca de um novo
            companheiro:{" "}
            <a href="https://arcabrasil.org.br/index.php/sites-para-adotar-ou-doar-um-animal/">
              Aqui!
            </a>
          </Sp>
        </li>
      </ul>
    </Ssection>

    <h2 className="alinhamento">
      Você ainda tem alguma pergunta? Fala com a gente!
    </h2>

    <Container>
      <Form onFinish={() => notification.open({ message: "Enviado!" })}>
        <h3>Mande sua dúvida ou reclamação!</h3>

        <SformItem
          label="Nome Completo"
          name="name"
          rules={[{ required: true, message: "Digite seu Nome Completo!" }]}
        >
          <SInput placeholder="Digite seu Nome." />
        </SformItem>

        <SformItem
          label="E-mail"
          name="email"
          rules={[
            { required: true, message: "Digite seu E-mail!", type: "email" },
          ]}
        >
          <SInput type="email" placeholder="Digite seu E-mail" />
        </SformItem>

        <SformItem
          label="Assunto"
          name="Subject"
          rules={[{ required: true, message: "Selecione Seu assunto!" }]}
        >
          <Select placeholder="Selecione" style={styles.customInput}>
            <Select.Option value="sugestion">Sugestões</Select.Option>
            <Select.Option value="complaint">Reclamação</Select.Option>
            <Select.Option value="compliment">Elogio</Select.Option>
            <Select.Option value="other">Outros</Select.Option>
          </Select>
        </SformItem>

        <SformItem
          label="Seu Texto"
          name="text"
          rules={[{ required: true, message: "Escreva seu texto!" }]}
        >
          <Input.TextArea style={styles.customInput} />
        </SformItem>

        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  </div>
);
