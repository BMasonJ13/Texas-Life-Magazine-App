import React from 'react'

//Subcomponents
import DropDown from '../../../components/forms/DropDown'
import {Subtitle} from '../../../components/sub/text/Text'

//Components 
import AddContentCard from '../../../components/admin/AddContentCard'

const SponsorDashboard = () =>
{

    return(
        <div>
            <AddContentCard path="/AddSponsor" action="Add Sponsor"/>
            <Subtitle>Filter</Subtitle>
            <DropDown>
                <option value="Home">Home</option>
                <option value="Music">Music</option>
                <option value="Tastes">Tastes</option>
                <option value="BackTheBlue">Back The Blue</option>
                <option value="CreationEvidenceMuseum">Creation Evidence Museum</option>
                <option value="SomervelleCounty">Somervelle County</option>
                <option value="Archives">Archives</option>
                <option value="Podcasts">Podcasts</option>
            </DropDown>
        </div>
    )

}

export default SponsorDashboard