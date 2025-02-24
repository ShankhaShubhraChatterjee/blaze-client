import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import ThemeSwitch from './ThemeSwitch.module'

describe('ThemeSwitch.module.ts', () => {
    it('Check If It Is Defined', () => {
        render(<ThemeSwitch />)
        expect(screen.getByTestId('theme-switch')).toBeDefined()
    })
})
