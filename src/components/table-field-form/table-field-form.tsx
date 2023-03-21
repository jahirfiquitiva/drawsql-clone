import { Field, Form } from "houseform";
import { Button } from "../button/buttons";
import { z } from "zod";
import { useTablesData } from "~/providers/TablesDataProvider";
import {
  TableField,
  FieldTypes,
  fieldTypesOptions,
  Table,
} from "./../../types/tables.d";
import {
  StyledForm,
  FormField,
  FormFieldErrors,
  CheckboxLabel,
} from "./table-field-form.styled";

interface TableFieldFormProps {
  tableName: Table["name"];
  onFieldCreated?: () => void;
}

export const TableFieldForm = (props: TableFieldFormProps) => {
  const { tableName, onFieldCreated } = props;
  const { dispatch } = useTablesData();
  return (
    <Form<TableField>
      onSubmit={(values) => {
        dispatch?.({
          type: "add-column",
          payload: {
            table: tableName,
            field: { ...values },
          },
        });
        onFieldCreated?.();
      }}
    >
      {({ submit }) => {
        return (
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p>
              <strong>Add new field</strong>
            </p>
            <Field<TableField["name"]>
              name={"name"}
              initialValue={""}
              onBlurValidate={z
                .string()
                .min(1, "Field name must not be empty")
                .regex(
                  RegExp(/^[a-z\_]+$/),
                  "Field name must be lowercase and can only contain letters and underscore"
                )}
            >
              {({ value, setValue, onBlur, errors }) => {
                return (
                  <FormField>
                    <label htmlFor={"name"}>Field name</label>
                    <input
                      id={"name"}
                      name={"name"}
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                      onBlur={onBlur}
                    />
                    {errors ? (
                      <FormFieldErrors>
                        {errors.map((error) => {
                          return <li>{error}</li>;
                        })}
                      </FormFieldErrors>
                    ) : null}
                  </FormField>
                );
              }}
            </Field>

            <Field<TableField["type"]>
              name={"type"}
              onBlurValidate={isValidType}
            >
              {({ value, setValue, onBlur, errors }) => {
                return (
                  <FormField>
                    <label htmlFor={"type"}>Field type</label>
                    <select
                      id={"type"}
                      name={"type"}
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value as FieldTypes);
                      }}
                      onBlur={onBlur}
                    >
                      <option disabled></option>
                      {fieldTypesOptions.map((type) => {
                        return <option value={type}>{type}</option>;
                      })}
                    </select>
                    {errors ? (
                      <FormFieldErrors>
                        {errors.map((error) => {
                          return <li>{error}</li>;
                        })}
                      </FormFieldErrors>
                    ) : null}
                  </FormField>
                );
              }}
            </Field>

            <Field<TableField["nullable"]>
              name={"nullable"}
              initialValue={false}
            >
              {({ value, setValue, onBlur, errors }) => {
                return (
                  <FormField>
                    <CheckboxLabel htmlFor={"nullable"}>
                      <input
                        id={"nullable"}
                        name={"nullable"}
                        checked={value}
                        onChange={(e) => {
                          setValue(e.target.checked);
                        }}
                        onBlur={onBlur}
                        type={"checkbox"}
                      />
                      Nullable?
                    </CheckboxLabel>
                    {errors ? (
                      <ul>
                        {errors.map((error) => {
                          return <li>{error}</li>;
                        })}
                      </ul>
                    ) : null}
                  </FormField>
                );
              }}
            </Field>

            <Button
              onClick={() => {
                submit();
              }}
            >
              Add field
            </Button>
          </StyledForm>
        );
      }}
    </Form>
  );
};

// This is simulating a check against a database
function isValidType(val: string) {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      const isValid = fieldTypesOptions.includes(val as FieldTypes);
      if (isValid) {
        resolve(true);
      } else {
        reject("The selected field type is not valid");
      }
    }, 20);
  });
}
