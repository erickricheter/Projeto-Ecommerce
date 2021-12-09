import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { FocusEvent, useState } from "react";
import { validateBr } from "js-brasil";
import { FormValidationsData } from "./types";

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
    <div id="cadastro-container">
      <h1>Faça seu cadastro!</h1>

      <Form form={form}>
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
          label="CPF"
          name="cpf"
          rules={[{ required: true, message: "Digite seu CPF Correto!" }]}
          validateStatus={formValidations.cpf.validateStatus}
          help={formValidations.cpf.errorMsg}
        >
          <Input type="number" placeholder="Digite seu CPF" />
        </Form.Item>

        <Form.Item
          label="Data Nascimento"
          name="bornDate"
          rules={[
            {
              required: true,
              message: "Digite uma Data de Nascimento Válida!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Sexo"
          name="gender"
          rules={[{ required: true, message: "Selecione Seu sexo!" }]}
        >
          <Select placeholder="Selecione">
            <Select.Option value="male">Homem</Select.Option>
            <Select.Option value="female">Mulher</Select.Option>
            <Select.Option value="none">Não declarado</Select.Option>
          </Select>
        </Form.Item>

        <h2 id="h2-endereco">Endereço</h2>
        <Form.Item
          label="CEP"
          name="cep"
          rules={[{ required: true, message: "CEP inválido!" }]}
        >
          <Input onBlur={cepBlur} />
        </Form.Item>

        <Form.Item
          label="Estado"
          name="country"
          rules={[{ required: true, message: "Estado Inválido!" }]}
        >
          <Input disabled={shouldDisableFields} />
        </Form.Item>

        <Form.Item
          label="Cidade"
          name="city"
          rules={[{ required: true, message: "Cidade Inválida!" }]}
        >
          <Input disabled={shouldDisableFields} />
        </Form.Item>

        <Form.Item
          label="Bairro"
          name="neighborhood"
          rules={[{ required: true, message: "Bairro Inválido!" }]}
        >
          <Input disabled={shouldDisableFields} />
        </Form.Item>

        <Form.Item
          label="Rua"
          name="street"
          rules={[{ required: true, message: "Rua Inválida!" }]}
        >
          <Input disabled={shouldDisableFields} />
        </Form.Item>

        <Form.Item
          label="Numero"
          name="number"
          rules={[{ required: true, message: "Numero da casa Inválido!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: "Senha Inválida!" }]}
        >
          <Input.Password maxLength={12} minLength={8} />
        </Form.Item>

        <Button type="link" htmlType="button">
          Login
        </Button>

        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Registrar
        </Button>

        <Button htmlType="button" onClick={onReset}>
          Cancelar
        </Button>
      </Form>
    </div>
  );
};
