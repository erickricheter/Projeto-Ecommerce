import FormItem from "antd/lib/form/FormItem";
import styled from "styled-components";

export const SformItem = styled(FormItem)`
  display: flex;
  flex-direction: column !important;

  .ant-form-item-label {
    text-align: left !important;
  }
`;
