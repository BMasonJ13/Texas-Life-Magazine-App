import React from 'react';

//Components
import AddContentCard from '../components/admin/AddContentCard'

//CSS Modules
import styles from './Sponsorship.module.css'

const Sponsorship = ({isAdmin}) => {
    return (
        <div>
            { isAdmin && <AddContentCard cardStyle={styles.adminCard} path="/SponsorDashboard" action="Sponsorship Dashboard"/> }
        </div>
    )
}

export default Sponsorship