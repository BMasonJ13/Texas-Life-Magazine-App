
import React from 'react';
import AddContentCard from '../../components/admin/AddContentCard';

//CSS Modules
import styles from './AdminDashboard.module.css'

const AdminDashboard = () =>
{
    return(
        <div className={styles.container}>
            <AddContentCard action={"Add Publication"} path="/AddPublication"/>
            <AddContentCard action={"Edit Publication Article"} path="/"/>
            <AddContentCard action={"Add Podcast"} path="/"/>
        </div>
    )
}

export default AdminDashboard