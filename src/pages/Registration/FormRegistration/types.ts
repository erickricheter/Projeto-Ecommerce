export interface FormValidationsData {
  cpf: {
    validateStatus:
      | ""
      | "success"
      | "error"
      | "warning"
      | "validating"
      | undefined;
    errorMsg: string | null;
  };
}
