import React, { useState, useEffect } from 'react';

//Firestore
import {getCards, getAds, sortByDate} from './admin/utils/SectionDataUtil'

//Supercomponents
import PublicationSection from '../components/super/PublicationSection'

//Components
import AddContentCard from '../components/admin/AddContentCard';

//CSS Module
import styles from './Archives.module.css'

const Archives = ({isAdmin}) => {

    const [data, setData] = useState(null);
    const [sponsorData, setSponsorData] = useState(null);

    const getData = async () => {
        setData( await getCards("Publications"))
        setSponsorData( await getAds("sponsor-archives"))
    }

    useEffect(() => {
        getData();
    }, [])

    const prepareData = () => {
        
        if(!data || !sponsorData)
            return null;

        let sectionAmount = Math.ceil(data.size / 4);
        const sections = [];
        const pubDocs = [];
        const sponsorDocs = [];

        for(let i = 0; i < data.size; i++){
            pubDocs[i] = data.docs[i].data();
        }
    
        for(let i = 0; i < sponsorData.size; i++){
            sponsorDocs[i] = sponsorData.docs[i].data();
        }

        pubDocs.sort(sortByDate);
        sponsorDocs.sort(sortByDate).reverse();

        for(let i = 0; i < sectionAmount; i++){
            const docs = [];
            const sponDocs = [];
            for(let j = 0; j < 4; j++){
                if((i * 4) + j > pubDocs.size)
                    docs[j] = null;
                else
                    docs[j] = pubDocs[(i * 4) + j];    
                if((i * 4) + j > sponsorDocs.size)
                    sponDocs[j] = null;
                else
                    sponDocs[j] = sponsorDocs[(i * 4) + j];          
            }
            sections[i] = <PublicationSection 
                        isAdmin={isAdmin} 
                        key={i + " key"} 
                        pubOne={docs[0]} 
                        pubTwo={docs[1]}
                        pubThree={docs[2]}
                        pubFour={docs[3]} 
                        adOne={sponDocs[0]}
                        adTwo={sponDocs[1]}
                        adThree={sponDocs[2]}
                        adFour={sponDocs[3]}
                        adLocation="archives"
                          />
        }

        return sections;
    }

    return (
        <>
        {isAdmin && 
                <div >
                    <AddContentCard cardStyle={styles.adminCard}  action={"Add Publication"} path="/AddPublication" />
                    <AddContentCard cardStyle={styles.adminCard} action={"Add Sponsor"} path="/AddSponsor/:Archives" />
                </div>
        }
        {
            prepareData()
        }
        </>
    )
}

export default Archives