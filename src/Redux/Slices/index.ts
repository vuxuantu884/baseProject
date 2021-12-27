import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import appReducer from "./auth";
import toastReducer from "./toast";
import appReducer from "./app";
// const persistConfig = {
//     key: "root",
//     storage,
// };

// const authPersistedReducer = persistReducer(persistConfig, appReducer);
export * from "./toast";
export * from "./app";

const productReducer = combineReducers({
    toast: toastReducer,
    app:appReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === "RESET") {
        // reset state
        state = {} as RootState;
        // reset local storage
        localStorage.clear();
    }
    return productReducer(state, action);
};
export default rootReducer;
