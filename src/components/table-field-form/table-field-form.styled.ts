import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 1rem 1.5rem;
  border: 1px solid #eee;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormFieldErrors = styled.ul`
  padding: 0;
  margin-block: 0;
  padding-block: 0;
  color: red;
  margin-left: 1rem;
  list-style: disc;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
