import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import React from 'react';
import {PersistGate} from "redux-persist/integration/react";
import IndexRoute from "./routes/IndexRoute";
import StoreConfig from "./configs/store/storeConfig";
import theme from "./configs/mui/theme";

function App() {
    const {store, persistor} = StoreConfig();
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    {<IndexRoute/>}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
