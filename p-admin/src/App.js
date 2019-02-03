// in app.js
import React from "react";
import { render } from "react-dom";
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";

import { WorkList, WorkEdit, WorkCreate, WorkIcon } from "./works";
import { TypeList, TypeEdit, TypeCreate, TypeIcon } from "./types";
const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('Access-Control-Allow-Origin', '*');
  return fetchUtils.fetchJson(url, options);
}
const App = () => (
  <Admin dataProvider={jsonServerProvider("http://localhost:3001", httpClient)}>
    <Resource
      name="works"
      list={WorkList}
      edit={WorkEdit}
      create={WorkCreate}
      icon={WorkIcon}
    />
    <Resource
      name="type"  
      list={TypeList}
      edit={TypeEdit}
      create={TypeCreate}
      icon={WorkIcon}
    />
  </Admin>
);

export default App;
