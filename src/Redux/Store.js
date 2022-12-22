import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import reducer from "./RootReducer";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherSaga)

export default store