import type { Table, TableField } from "./tables";

export type TablesData = Record<string, Table>;

type CollapseTablesAction = {
  type: "collapse";
};

type AddTableAction = {
  type: "add";
  payload: Table["name"];
};

type RemoveTableAction = {
  type: "remove";
  payload: Table["name"];
};

type AddTableColumnAction = {
  type: "add-column";
  payload: {
    table: Table["name"];
    field: TableField;
  };
};

type RemoveTableColumnAction = {
  type: "remove-column";
  payload: {
    table: Table["name"];
    field: TableField["name"];
  };
};

export type TablesDataAction =
  | CollapseTablesAction
  | AddTableAction
  | RemoveTableAction
  | AddTableColumnAction
  | RemoveTableColumnAction;
