import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {client} from "./features/base/graphql/apollo";
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <App/>
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

