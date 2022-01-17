
import {getDocuments} from '../../../utils/Database'

const getCards = async (fireBaseCollection) => {
    const snapshot = await getDocuments(fireBaseCollection);

    if (snapshot)
        return snapshot;
    else
        console.log(`Snapshot doesn't exist for '${fireBaseCollection}'.`)
}

const getAds = async (fireBaseCollection) => {
    const sponsorSnapshot = await getDocuments(fireBaseCollection);

    if (sponsorSnapshot)
        return sponsorSnapshot
    else
        console.log(`Sponsor Snapshot doesn't exist for '${fireBaseCollection}.'`)
}

const sortByDate = (a, b) => {

    if (a === null)
        return -1;
    if (b === null)
        return 1;

    const dateA = a.dateAdded;
    const dateB = b.dateAdded;
    return new Date(dateB).getTime() - new Date(dateA).getTime();
}

export {
    getCards,
    getAds,
    sortByDate,
}