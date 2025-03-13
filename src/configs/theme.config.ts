import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const theme = defineConfig({
    theme: {
        breakpoints: {
            tablet: '992px',
            desktop: '1200px',
            wide: '1400px',
        },
    },
})

export const themeConfig = createSystem(defaultConfig, theme)
