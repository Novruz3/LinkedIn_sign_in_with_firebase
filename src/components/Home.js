import React from 'react'
import { SectionLeft } from './SectionLeft'
import { SectionRight } from './SectionRight'
import { Section } from './Section'

export const Home = ({userData}) => {
    return (
        <div className='row'>
            <div className='col-3'>
                <SectionLeft userData={ userData} />
            </div>
            <div className='col-6'>
                <Section userData={ userData}/>
            </div>
            <div className='col-3'>
                <SectionRight />
            </div>
        </div>
    )
}
