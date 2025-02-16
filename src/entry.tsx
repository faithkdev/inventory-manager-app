import { createRoot } from 'react-dom/client';
import { App, } from './App';
import PouchDB from 'pouchdb-browser';
import { Provider } from 'use-pouchdb';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";



const root = createRoot(document.body);
const db = new PouchDB('local');


root.render(
    <ChakraProvider value={defaultSystem}>
        <Provider pouchdb={db}>
            <App />
        </Provider>
    </ChakraProvider>
);