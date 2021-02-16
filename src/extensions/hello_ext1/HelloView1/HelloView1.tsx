import React, { FunctionComponent } from 'react'
import { HelloViewProps } from '../../pluginInterface'

const HelloView1: FunctionComponent<HelloViewProps> = ({ text }) => {
    return (
        <div>
            Hello view 1: {text}
        </div>
    )
}

export default HelloView1