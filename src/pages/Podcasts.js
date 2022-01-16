import React from 'react';

//Supercomponents
import PodcastSection from '../components/super/PodcastSection';

//Components
import AddContentCard from '../components/admin/AddContentCard'

//CSS Modules
import styles from './Podcast.module.css'

const Podcasts = ({isAdmin}) => {
    return (
        <>
            { isAdmin && <AddContentCard cardStyle={styles.adminCard} path="/AddPodcast" action="Add a Podcast"/> }
            <PodcastSection />
            <PodcastSection />
            <PodcastSection />
            <PodcastSection />
            <PodcastSection />
            <PodcastSection />
        </>
    )
}

export default Podcasts