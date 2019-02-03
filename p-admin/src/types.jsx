import React from "react";
import {
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  ImageField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
export const TypeIcon = BookIcon;

export const TypeList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <EditButton basePath="/types" />
    </Datagrid>
  </List>
);

const TypeTitle = ({ record }) => {
  return <span>Type {record ? `"${record.title}"` : ""}</span>;
};

export const TypeEdit = props => (
  <Edit title={<TypeTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

export const TypeCreate = props => (
  <Create title="Create a Type" {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);
