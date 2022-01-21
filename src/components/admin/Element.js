import React from 'react'

//Subcomponents
import {Header, Subtitle, Paragraph} from '../sub/text/Text'

const Element = ({header, subtitle, paragraph, imageA, imageB, imageC}) =>
{

    const returnElement = () => 
    {
        if(header)
            return <Header>{header}</Header>
        else if(subtitle)
            return <Subtitle>{subtitle}</Subtitle>
        else if(paragraph)
            return <Paragraph>{paragraph}</Paragraph>
        else if(imageA && imageB && imageC)
            return( <div><img src={imageA} alt=""/><img src={imageB} alt=""/><img src={imageC} alt=""/></div> )
        else if (imageA && imageB)
            return (<div><img src={imageA} alt="" /><img src={imageB} alt="" /></div>)
        else if (imageA)
            return (<div><img src={imageA} alt="" /></div>)
        else
            return <></>
    }

    return (
        { returnElement }
    )

}

export default Element;