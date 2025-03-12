// React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// React Redux Imports
import { Provider } from 'react-redux'

// Chakra UI Imports
import { Provider as ChakraProvider } from './components/ui/provider'

// Custom User Imports
import App from './App'

// Stylesheet Imports
import './main.scss'

// User Configuration Imports
import { store } from './configs/store.config'
import { themeConfig } from './configs/theme.config'

// Root Entry Point (main.tsx)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChakraProvider>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </ChakraProvider>
)
