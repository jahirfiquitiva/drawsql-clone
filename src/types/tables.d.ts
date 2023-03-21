export const fieldTypesOptions = ["Int", "String", "DateTime"] as const;

export type FieldTypes = (typeof fieldTypesOptions)[number];

export interface TableField {
  name: string;
  type: FieldTypes;
  nullable?: boolean;
}

export interface Table {
  name: string;
  fields: Array<TableField>;
  visualState?: "expanded" | "collapsed";
}
