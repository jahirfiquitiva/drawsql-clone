import styled, { css } from "styled-components";

export const Button = styled.button<{
  outlined?: boolean;
  secondary?: boolean;
}>`
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  min-height: 2.5rem;
  min-width: 2.5rem;

  ${(props) =>
    props.outlined
      ? css`
          border: 2px solid ${props.secondary ? "#8796a1" : "#37b3ad"};
          color: ${props.secondary ? "#8796a1" : "#37b3ad"};
          background-color: transparent;
        `
      : css`
          border: none;
          background-color: ${props.secondary ? "#9fabb4" : "#37b3ad"};
          color: ${props.secondary ? "#000" : "#fff"};
        `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  gap: 1rem;
`;
