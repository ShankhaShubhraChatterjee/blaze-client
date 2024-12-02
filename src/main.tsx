// Modules

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from './App'

import "./main.scss"

// Configs

import { store } from './configs/store.config'
import theme from './configs/theme.config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <Provider store={store}>
      <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </React.StrictMode>
    </Provider>
  </ChakraProvider>
)
