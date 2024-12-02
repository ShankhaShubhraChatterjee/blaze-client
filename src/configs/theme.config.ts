import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}


const theme = extendTheme({ themeConfig })

export default theme