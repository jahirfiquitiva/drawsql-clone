import { createContext, useReducer, useContext } from "react";
import type { PropsWithChildren, Dispatch } from "react";
import type {
  TablesData,
  TablesDataAction,
} from "~/types/tables-data-provider";
import { Table } from "~/types/tables";

const TablesDataContext = createContext<{
  state: TablesData;
  dispatch?: Dispatch<TablesDataAction>;
}>({ state: {} });

const tablesDataReducer = (state: TablesData, action: TablesDataAction) => {
  switch (action.type) {
    case "collapse": {
      const newData = { ...state };
      Object.keys(newData).forEach((tableName) => {
        newData[tableName].visualState = "collapsed";
      });
      return newData;
    }

    case "add": {
      const newData = { ...state };
      newData[action.payload] = {
        name: action.payload,
        fields: [],
      };
      return newData;
    }

    case "remove": {
      const newData = { ...state };
      delete newData[action.payload];
      return newData;
    }

    case "add-column": {
      const newData = { ...state[action.payload.table] };
      console.log(newData);
      newData.fields = [...newData.fields, action.payload.field];
      console.log(newData);
      const newTablesData = { ...state };
      newTablesData[action.payload.table] = newData;
      return newTablesData;
    }

    case "remove-column": {
      const newData = { ...state[action.payload.table] };
      newData.fields = newData.fields.filter(
        (it) => it.name !== action.payload.field
      );
      const newTablesData = { ...state };
      newTablesData[action.payload.table] = newData;
      return newTablesData;
    }

    default: {
      return state;
    }
  }
};

export const TablesDataProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(tablesDataReducer, {});
  return (
    <TablesDataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TablesDataContext.Provider>
  );
};

export const useTablesData = () => useContext(TablesDataContext);

export const useTableState = (tableName: Table["name"]): boolean => {
  const { state } = useTablesData();
  return state[tableName]?.visualState === "expanded";
};
