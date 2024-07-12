import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Netflix from './App';
import { Login } from './components/login/login';
import { DataBinding } from './components/dataBinding/dataBinding';
import { ObjectType } from './components/object/objectType';
import { MapType } from './components/object/MapType';
import { StateExample } from './components/State/StateExample';
import ApiDataBinding from './components/dataBinding/api-data-binding';
import { ContextDemo } from './components/context-api/contextDemo';
import { StyleDemo } from './components/style-demo/styleDemo';
import { EventDemo } from './components/event/eventDemo';
import { MouseTouch } from './components/event/mouseTouch';
import { KeyDemo } from './components/event/keyDemo';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { KeyDemo2 } from './components/event/keydemo2';
import { ClipBoardDemo } from './components/event/clipBoardDemo';
import { FormsDemo } from './components/event/formsDemo';
import { FormsReactDemo } from './components/forms/formsReactdemo';
import { FormicDemo } from './components/forms/formikDemo';
import { YupDemo } from './components/forms/YupDemo';
import { FormikDemo2 } from './components/forms/formikDemo2';
import { Interview } from './components/dataBinding/interview';
import { HookForm } from './components/forms/hookForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
   <HookForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results ( from 'for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
