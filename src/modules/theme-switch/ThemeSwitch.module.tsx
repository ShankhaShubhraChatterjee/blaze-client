import { Switch } from '@chakra-ui/react'

import './theme-switch.module.scss'
import { useState } from 'react'

function ThemeSwitch(props: any) {
    const [colorMode, toggleColorMode] = useState(true)
    return (
        // <label className="switch" htmlFor={props.id}>
        //     <input type="checkbox" name={props.name} checked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} className="switch-input" id={props.id} />
        //     <div className="custom-switch"></div>
        // </label>
        <div>
            <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label>Label</Switch.Label>
            </Switch.Root>
        </div>
    )
}

export default ThemeSwitch
