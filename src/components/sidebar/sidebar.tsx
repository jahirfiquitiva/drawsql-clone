import { useTablesData, useTableState } from "~/providers/TablesDataProvider";
import { Table as TableType } from "~/types/tables";
import { Button, ButtonGroup } from "../button/buttons";
import { Table } from "../table";
import { SidebarContainer, TablesList } from "./sidebar.styled";

export const Sidebar = () => {
  const { state, dispatch } = useTablesData();

  return (
    <SidebarContainer>
      <ButtonGroup>
        <Button
          outlined
          secondary
          onClick={() => {
            dispatch?.({ type: "collapse" });
          }}
        >
          Collapse All
        </Button>
        <Button
          onClick={() => {
            const tableName = prompt("Enter new table name");
            if (!tableName) return;
            dispatch?.({ type: "add", payload: tableName });
          }}
        >
          New table
        </Button>
      </ButtonGroup>
      <TablesList>
        {Object.keys(state).map((tableName) => {
          const table = state[tableName];
          return (
            <li key={table.name}>
              <Table {...table} />
            </li>
          );
        })}
      </TablesList>
    </SidebarContainer>
  );
};
