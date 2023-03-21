import type { TableField as TableFieldType } from "~/types/tables";
import { Button } from "../button/buttons";
import { TableFieldRow } from "./table-field.styled";

interface TableFieldProps extends TableFieldType {
  onFieldDelete?: () => void;
}

export const TableField = (props: TableFieldProps) => {
  return (
    <TableFieldRow>
      <p>{props.name}</p>
      <p>
        {props.type}
        {props.nullable ? <span>?</span> : null}
      </p>
      <input disabled readOnly type={"checkbox"} checked={props.nullable} />
      <Button
        secondary
        onClick={() => {
          props.onFieldDelete?.();
        }}
      >
        Delete
      </Button>
    </TableFieldRow>
  );
};
