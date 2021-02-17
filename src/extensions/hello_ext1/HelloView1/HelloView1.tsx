import { useHitherJob } from 'labbox'
import React, { FunctionComponent } from 'react'
import { HelloViewProps } from '../../pluginInterface'

const HelloView1: FunctionComponent<HelloViewProps> = ({ text }) => {
    const {result: onePlusOne, job} = useHitherJob<number>('createjob_test_hello_ext1', {x: 1}, {useClientCache: true})
    console.log('--- onePlusOne', onePlusOne, job)
    return (
        <div>
            One plus one is: <span style={{color: 'green', fontWeight: 'bold'}}>{onePlusOne + ''}</span>
        </div>
    )
}

export default HelloView1