import styled from "styled-components";

export const TableContainer = styled.details`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
`;

export const TableName = styled.h5`
  background-color: #eee;
  padding: 0.5rem 1rem;
`;

export const TableSummary = styled.summary`
  position: relative;

  &::marker {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const TableFields = styled.ul`
  list-style: none;
  padding: 0;
  margin-block: 0;
  padding-block: 0;
  border-bottom: 1px solid #aaa;
`;
