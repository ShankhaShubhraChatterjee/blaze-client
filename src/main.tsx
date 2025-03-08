// Modules

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import * as ChakraProvider from './components/ui/provider'

import App from './App'

import './main.scss'

// Configs

import { store } from './configs/store.config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChakraProvider.Provider>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </ChakraProvider.Provider>
)
