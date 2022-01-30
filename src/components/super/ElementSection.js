import React from 'react';

//Components
import Element from '../admin/Element'
import Ad from '../ad/Ad'

//CSS Modules
import styles from './ElementSection.module.css'

const ElementSection = ({ isAdmin, section1, section2, section3, section4, ad1, ad2, ad3, ad4, adLocation }) => {

    return (

        <section className={styles.homeSection}>
            <div className={styles.container}>
                {section1 && <Element
                    sections={section1}
                />}
                {section2 && <Element
                    sections={section2}
                />}
            </div>
            <div className={styles.container}>
                {section3 && <Element
                    sections={section3}
                />}
                {section4 && <Element
                    sections={section4}
                />}
            </div>
            <div className={styles.adInner} id={styles.one}>
                {ad1 && <Ad isAdmin={isAdmin} id={ad1.id} image={ad1.imageURL} path={ad1.websiteURL} adLocation={adLocation} />}
                {ad2 && <Ad isAdmin={isAdmin} id={ad2.id} image={ad2.imageURL} path={ad2.websiteURL} adLocation={adLocation} />}
            </div>
            <div className={styles.adInner} id={styles.two}>
                {ad3 && <Ad isAdmin={isAdmin} id={ad3.id} image={ad3.imageURL} path={ad3.websiteURL} adLocation={adLocation} />}
                {ad4 && <Ad isAdmin={isAdmin} id={ad4.id} image={ad4.imageURL} path={ad4.websiteURL} adLocation={adLocation} />}
            </div>
        </section>

    )

}

export default ElementSection