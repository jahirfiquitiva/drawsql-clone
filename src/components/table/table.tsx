import { useState } from "react";
import { useTablesData, useTableState } from "~/providers/TablesDataProvider";
import type { Table as TableType } from "~/types/tables";
import { Button, ButtonGroup } from "../button/buttons";
import { TableField } from "../table-field";
import { TableFieldForm } from "../table-field-form";
import {
  TableContainer,
  TableFields,
  TableName,
  TableSummary,
} from "./table.styled";

export const Table = (props: TableType) => {
  const { dispatch } = useTablesData();
  const [newFieldFormActive, setNewFieldFormActive] = useState(false);
  const expanded = useTableState(props.name);
  return (
    <TableContainer open={expanded}>
      <TableSummary>
        <TableName>{props.name}</TableName>
      </TableSummary>
      <div>
        <TableFields>
          {props.fields.map((field) => {
            return (
              <li key={field.name}>
                <TableField
                  {...field}
                  onFieldDelete={() => {
                    dispatch?.({
                      type: "remove-column",
                      payload: { table: props.name, field: field.name },
                    });
                  }}
                />
              </li>
            );
          })}
        </TableFields>
        {newFieldFormActive && (
          <TableFieldForm
            tableName={props.name}
            onFieldCreated={() => {
              setNewFieldFormActive(false);
            }}
          />
        )}
        <ButtonGroup>
          <Button
            secondary
            outlined
            onClick={() => {
              dispatch?.({ type: "remove", payload: props.name });
            }}
          >
            Delete
          </Button>
          <Button
            outlined
            onClick={() => {
              setNewFieldFormActive(true);
            }}
          >
            New Column
          </Button>
        </ButtonGroup>
      </div>
    </TableContainer>
  );
};
