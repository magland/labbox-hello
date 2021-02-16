import React, { FunctionComponent } from 'react'
import { HelloViewProps } from '../../pluginInterface'

const HelloView2: FunctionComponent<HelloViewProps> = ({ text }) => {
    return (
        <div>
            Hello view 2: {text}
        </div>
    )
}

export default HelloView2