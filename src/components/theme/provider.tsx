import React from 'react'
import {ThemeProvider} from 'styled-components'
import constants from './constants'

export const Provider: React.FC<{}> = ({children}) => {
    return (
        <ThemeProvider theme={constants}>
            {children}
        </ThemeProvider>
    )
}
