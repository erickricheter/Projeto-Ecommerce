import React from "react";

export const FormRegistration = () => (
  <div id="cadastro-container">
    <h1>Faça seu cadastro!</h1>

    <div id="documentos">
      <form>
        <label htmlFor="nome">Nome*:</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite seu Nome"
          required /* maxlength="10" */
        />

        <label htmlFor="sobrenome">Sobrenome*:</label>
        <input
          type="text"
          name="Digite seu Sobrenome"
          id="sobrenome"
          placeholder="Ex: Ferreira"
          required
        />

        <label htmlFor="email">E-mail*:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu E-mail"
          required
        />

        <label htmlFor="cpf">Cpf*:</label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          placeholder="Digite seu cpf (somente numeros)"
          pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
          required
        />

        <label htmlFor="dataNascimento">Data Nascimento*:</label>
        <input type="date" name="dataNascimento" id="dataNascimento" required />

        <label htmlFor="sexo">
          Sexo: <span className="opcional">(Opcional)</span>
        </label>
        <select>
          <option value="N">Não definido</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
      </form>
    </div>

    <div id="endereco">
      <h2 id="h2-endereco">Endereço</h2>
      <form>
        <label htmlFor="rua">Rua*</label>
        <input
          type="text"
          name="rua"
          id="rua"
          placeholder="Digite sua Rua"
          required
        />

        <label htmlFor="numeroCasa">Numero da Casa*:</label>
        <input
          type="number"
          name="numeroCasa"
          id="numeroCasa"
          placeholder="Digite o numero da sua Casa"
          required
        />

        <label htmlFor="bairro">Bairro*:</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          placeholder="Digite seu Bairro"
          required
        />

        <label htmlFor="cidade">Cidade*:</label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          placeholder="Digite sua cidade"
          required
        />

        <label htmlFor="estado">Estado*:</label>
        <input
          type="text"
          name="estado"
          id="estado"
          placeholder="Digite seu Estado"
          required
        />

        <label htmlFor="cep">CEP*:</label>
        <input
          type="text"
          name="cep"
          id="cep"
          placeholder="Digite seu CPF"
          required
          pattern="[0-8]{5}-[0-8]{3}"
        />

        <a href="login.html">Já tem uma conta? Faça seu login!</a>

        <input type="submit" name="cadastrar" value="Cadastrar" />
      </form>
    </div>
  </div>
);
