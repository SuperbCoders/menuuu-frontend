import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from "./store/configureStore";
import './index.scss';
import {Provider} from "react-redux";

const store = configureStore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);