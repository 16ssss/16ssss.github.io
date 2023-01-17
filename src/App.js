import {Provider} from "react-redux";
import store from "./settings/store/store";
import {ThemeProvider} from "@mui/material";
import theme from "./settings/mui/theme";
import IndexRoute from "./routes/IndexRoute";
import React from 'react';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {<IndexRoute/>}
            </ThemeProvider>
        </Provider>
    );
}

export default App;
