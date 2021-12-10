import { DatePicker, Form, notification, Select } from "antd";
import React, { FocusEvent, useState } from "react";
import { validateBr } from "js-brasil";
import { FormValidationsData } from "./types";
import { ButtonAlign, Container, H2, Sbutton, SInput } from "./styles";
import { SformItem } from "../../../styles";

const styles = {
  customInput: { width: "100%", border: "2px solid black" },
};

export const FormRegistration = () => {
  const [form] = Form.useForm();

  const [formValidations, setFormValidations] = useState<FormValidationsData>({
    cpf: { validateStatus: "success", errorMsg: "" },
  });

  const [shouldDisableFields, setShouldDisableFields] = useState(false);

  const cleanAddressFields = () => {
    form.setFieldsValue({
      street: "",
      city: "",
      neighborhood: "",
      country: "",
    });
    setShouldDisableFields(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    const isCpfValid = validateBr.cpf(values.cpf ?? "");
    if (!isCpfValid) {
      setFormValidations({
        ...formValidations,
        cpf: { validateStatus: "error", errorMsg: "CPF Inválido" },
      });
      return false;
    }
    setFormValidations({
      ...formValidations,
      cpf: { validateStatus: "success", errorMsg: null },
    });
    notification.open({ message: "Registrado" });
    return true;
  };
  const cepBlur = async (evt: FocusEvent<HTMLInputElement>) => {
    const cepValue = evt.target.value ?? "";
    if (validateBr.cep(cepValue)) {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepValue}/json/`
      );
      const data = await response.json();
      if (!data.erro) {
        form.setFieldsValue({
          street: data.logradouro,
          city: data.localidade,
          neighborhood: data.bairro,
          country: data.uf,
        });
        setShouldDisableFields(true);
      } else {
        setShouldDisableFields(false);
        cleanAddressFields();
      }
    } else {
      cleanAddressFields();
    }
  };
  return (
    <Container id="cadastro-container">
      <h1>Faça seu cadastro!</h1>

      <Form form={form}>
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
          label="CPF"
          name="cpf"
          rules={[{ required: true, message: "Digite seu CPF Correto!" }]}
          validateStatus={formValidations.cpf.validateStatus}
          help={formValidations.cpf.errorMsg}
        >
          <SInput type="number" placeholder="Digite seu CPF" />
        </SformItem>

        <SformItem
          label="Data Nascimento"
          name="bornDate"
          rules={[
            {
              required: true,
              message: "Digite uma Data de Nascimento Válida!",
            },
          ]}
        >
          <DatePicker style={styles.customInput} />
        </SformItem>

        <SformItem
          label="Sexo"
          name="gender"
          rules={[{ required: true, message: "Selecione Seu sexo!" }]}
        >
          <Select placeholder="Selecione" style={styles.customInput}>
            <Select.Option value="male">Homem</Select.Option>
            <Select.Option value="female">Mulher</Select.Option>
            <Select.Option value="none">Não declarado</Select.Option>
          </Select>
        </SformItem>

        <H2>Endereço</H2>
        <SformItem
          label="CEP"
          name="cep"
          rules={[{ required: true, message: "CEP inválido!" }]}
        >
          <SInput onBlur={cepBlur} />
        </SformItem>

        <SformItem
          label="Estado"
          name="country"
          rules={[{ required: true, message: "Estado Inválido!" }]}
        >
          <SInput disabled={shouldDisableFields} />
        </SformItem>

        <SformItem
          label="Cidade"
          name="city"
          rules={[{ required: true, message: "Cidade Inválida!" }]}
        >
          <SInput disabled={shouldDisableFields} />
        </SformItem>

        <SformItem
          label="Bairro"
          name="neighborhood"
          rules={[{ required: true, message: "Bairro Inválido!" }]}
        >
          <SInput disabled={shouldDisableFields} />
        </SformItem>

        <SformItem
          label="Rua"
          name="street"
          rules={[{ required: true, message: "Rua Inválida!" }]}
        >
          <SInput disabled={shouldDisableFields} />
        </SformItem>

        <SformItem
          label="Numero"
          name="number"
          rules={[{ required: true, message: "Numero da casa Inválido!" }]}
        >
          <SInput />
        </SformItem>

        <SformItem
          label="Senha"
          name="password"
          rules={[{ required: true, message: "Senha Inválida!" }]}
        >
          <SInput.Password
            maxLength={12}
            minLength={8}
            style={styles.customInput}
          />
        </SformItem>
        <ButtonAlign>
          <Sbutton type="link" htmlType="button">
            Login
          </Sbutton>

          <Sbutton type="primary" htmlType="submit" onClick={handleSubmit}>
            Registrar
          </Sbutton>

          <Sbutton type="link" onClick={onReset}>
            Cancelar
          </Sbutton>
        </ButtonAlign>
      </Form>
    </Container>
  );
};
