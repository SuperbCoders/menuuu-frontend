import React, {Suspense} from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import configureStore from "./store/configureStore";
import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = configureStore();
const App = React.lazy(() => import('./App'));

root.render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <App/>
        </Suspense>
    </Provider>
);