import React from "react";
import { Button, Form, Input, Select } from "antd";

export const ContactForm = () => (
  <div>
    <h1 className="alinhamento">Bem vindo! tire suas dúdidas com a gente!</h1>

    <h1>Vamos ver nossas perguntas frequentes antes de tudo?</h1>

    <section className="pergunta">
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
    </section>

    <section className="pergunta">
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
    </section>

    <section className="pergunta">
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
    </section>

    <section className="pergunta">
      <ul>
        <li>
          <h2>Vocês vendem animais?</h2>
          <p>
            Nossa loja e contra a venda de animais, já que você está procurando
            um animalzinho porque não adota um? Tem tantos esperando um novo
            lar! Aqui esta alguns links para te ajudar nessa busca de um novo
            companheiro:{" "}
            <a href="https://arcabrasil.org.br/index.php/sites-para-adotar-ou-doar-um-animal/">
              Aqui!
            </a>
          </p>
        </li>
      </ul>
    </section>

    <h2 className="alinhamento">
      Você ainda tem alguma pergunta? Fala com a gente!
    </h2>

    <Form>
      <h3>Mande sua dúvida ou reclamação!</h3>

      <Form.Item
        label="Nome Completo"
        name="name"
        rules={[{ required: true, message: "Digite seu Nome Completo!" }]}
      >
        <Input placeholder="Digite seu Nome." />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { required: true, message: "Digite seu E-mail!", type: "email" },
        ]}
      >
        <Input type="email" placeholder="Digite seu E-mail" />
      </Form.Item>

      <Form.Item
        label="Assunto"
        name="Subject"
        rules={[{ required: true, message: "Selecione Seu assunto!" }]}
      >
        <Select placeholder="Selecione">
          <Select.Option value="sugestion">Sugestões</Select.Option>
          <Select.Option value="complaint">Reclamação</Select.Option>
          <Select.Option value="compliment">Elogio</Select.Option>
          <Select.Option value="other">Outros</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Seu Texto"
        name="text"
        rules={[{ required: true, message: "Escreva seu texto!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form>
  </div>
);
