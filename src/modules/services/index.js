import React from 'react';
import Developmentservices from './component/developmentservices';
import Appdeveloment from './component/appdevelopment';
import Webdevelopment from './component/webdevelopment';
import Uidesign from './component/uidesign';
import Mobilegamesevelopment from './component/mobilegamesdevelopment';
import Virtualappdevelopment from './component/virtualappsdevelopment';
import Lotsolution from './component/lotsolutions';
import Wearablesappdevelopment from './component/wearablesappdevelopment';
import Aiappdevelopment from './component/aiappdevelopment';
import Qualityassurance from './component/qualityassurance';
import Hiredeveloper from './component/hiredeveloper';
import Startaproject from './component/startaproject';
import Worpressdevelopment from './component/wordpressdevelopment';
import Ideas from './component/ideas';
function Services(){
    return(
        <div className="Services">
        <Developmentservices />
         <Appdeveloment /> 
         <Webdevelopment />
        <Uidesign />
        <Mobilegamesevelopment />
        <Virtualappdevelopment />
        <Lotsolution />
        <Wearablesappdevelopment />
        <Aiappdevelopment />
        <Qualityassurance />
        <Hiredeveloper />
        <Startaproject />
        <Worpressdevelopment />
        <Ideas />
        
        </div>
    )
}
export default  Services;