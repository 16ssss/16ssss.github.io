import {Provider} from "react-redux";
// import store from "./settings/store/store";
import {ThemeProvider} from "@mui/material";
import theme from "./settings/mui/theme";
import IndexRoute from "./routes/IndexRoute";
import React from 'react';

import {PersistGate} from "redux-persist/integration/react";
import persistConfig from "./settings/store/persistConfig";

function App() {
    const {store, persistor} = persistConfig();
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} >
                <ThemeProvider theme={theme}>
                    {<IndexRoute/>}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
