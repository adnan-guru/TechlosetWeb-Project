import React from 'react';
import Contactus from './components/contactus';
import Bitabout from './components/bitabout';
import Ourwork from '../about/components/ourwork';
import Bigidea from '../../commonComponents/bigidea';

function About() {
    return (
        <div>
            <Contactus />
            <Bitabout />
            <Ourwork />
            <Bigidea />

        </div>
    )
}


export default About;