import React from 'react'

//Subcomponents
import {Paragraph} from '../sub/text/Text'

//CSS modules
import './Element.css'

const Element = ({ sections }) =>
{

    return (
        <div >
            <img  src={sections.image} className={sections.imageSize} alt="" />
            <Paragraph textStyle="para">{sections.para}</Paragraph>
        </div>
    )
}

export default Element;