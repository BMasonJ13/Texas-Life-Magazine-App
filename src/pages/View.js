
import React, { useState, useEffect } from 'react'

import { getDocument } from '../utils/Database';
//Firestore
import { getAds } from './admin/utils/SectionDataUtil'
import {Header} from '../components/sub/text/Text'

import { useParams } from 'react-router-dom'
import ElementSection from '../components/super/ElementSection';
import NoFiles from '../components/nofiles-card/NoFiles'

import styles from './View.module.css'

const View = () =>
{

    const { type, id } = useParams();

    const [head, setHead] = useState("")
    const [sections, setSections] = useState([])

    const [sponsorData, setSponsorData] = useState(null)

    const getData = async () => {
        const snapshot = await getDocument(`Articles-${type.toLowerCase()}`, id);

        if (snapshot) {
            setHead(snapshot.header)

            setSections(snapshot.sections)
        } else {
            console.log(`Document could not be found in FireStore/Articles-${type.toLowerCase()}/`)
        }

        setSponsorData(await getAds(`sponsor-${type.substring(0).toLowerCase()}`))
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const prepareData = () => {

        if (!sections || !sponsorData)
            return null;

        let s = [];
        const count = Math.ceil(sections.length);

        const sponsorDocs = [];
        if (count === 0)
            return <NoFiles />

        console.log(sponsorData.size)

        for (let i = 0; i < sponsorData.size; i++) {
            sponsorDocs[i] = sponsorData.docs[i].data();
        }

        console.log(sponsorDocs)

        for (let i = 0; i < count; i+=4) {
            s[i] = <ElementSection 
            key={i}
            section1={sections[i]} 
            section2={sections[i + 1]}
            section3={sections[i + 2]}
            section4={sections[i + 3]}
            ad1={sponsorDocs[i]}
            ad2={sponsorDocs[i + 1]}
            ad3={sponsorDocs[i + 2]}
            ad4={sponsorDocs[i + 3]}
            />
        }

        return s;
    }

    return(
        <>
            <Header textStyle={styles.header}>{head}</Header>
            {prepareData()}
        </>
    )

}

export default View;