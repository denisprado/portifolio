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
  LongTextInput,
  ImageInput,
  ReferenceArrayInput,
  SelectArrayInput
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
export const WorkIcon = BookIcon;

export const WorkList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ImageField source="imagePath" />
      <ReferenceArrayField label="types" reference="type" source="typeIdList">
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton basePath="/works" />
    </Datagrid>
  </List>
);

const WorkTitle = ({ record }) => {
  return <span>Work {record ? `"${record.title}"` : ""}</span>;
};

export const WorkEdit = props => (
  <Edit title={<WorkTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="description" />
      <ReferenceArrayInput source="typeIdList" reference="type">
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>
      <ImageInput source="imagePath" label="Related pictures" accept="image/*">
        <ImageField source="imagePath" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const WorkCreate = props => (
  <Create title="Create a Work" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <LongTextInput source="description" />
      <ReferenceArrayInput source="typeIdList" reference="type">
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>
      <ImageInput source="imagePath" label="Related pictures" accept="image/*">
        <ImageField source="imagePath" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
