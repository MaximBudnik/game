import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/client/link/ws';
import {appConfig} from "../../../config/appConfig";

const httpLink = new HttpLink({
    uri: appConfig.apollo.httpUri
});

const wsLink = new WebSocketLink({
    uri: appConfig.apollo.wsUri as string,
    options: {
        reconnect: true
    }
});

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});
