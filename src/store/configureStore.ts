import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        rootReducer(),
        compose(
            applyMiddleware(
                sagaMiddleware,
            ),
        ),
    );
    sagaMiddleware.run(rootSaga);

    return store;
}
