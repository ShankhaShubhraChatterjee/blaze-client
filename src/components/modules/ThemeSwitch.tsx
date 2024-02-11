import React from "react";
import './../../assets/scss/modules/theme_switch.scss';
import { useColorMode } from "@chakra-ui/react";

function ThemeSwitch (props: any) {
    const { colorMode, toggleColorMode } = useColorMode()
    return(
        <label className="switch" htmlFor={props.id}>
            <input type="checkbox" name={props.name} checked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} className="switch-input" id={props.id} />
            <div className="custom-switch"></div>
        </label>
    )
}

export default ThemeSwitch;