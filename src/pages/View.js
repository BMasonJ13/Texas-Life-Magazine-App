
import React, { useState, useEffect } from 'react'

import { getDocument } from '../utils/Database';
import Element from '../components/admin/Element'

import { useParams } from 'react-router-dom'

const View = () =>
{

    const { type, id } = useParams();

    const [head, setHead] = useState("")

    const [img1, setImg1] = useState("")
    const [para1, setPara1] = useState("")

    const [img2, setImg2] = useState("")
    const [para2, setPara2] = useState("")

    const [img3, setImg3] = useState("")
    const [para3, setPara3] = useState("")

    const [img4, setImg4] = useState("")
    const [para4, setPara4] = useState("")

    const [img5, setImg5] = useState("")
    const [para5, setPara5] = useState("")

    const [img6, setImg6] = useState("")
    const [para6, setPara6] = useState("")

    const [img7, setImg7] = useState("")
    const [para7, setPara7] = useState("")

    const [img8, setImg8] = useState("")
    const [para8, setPara8] = useState("")

    const [img9, setImg9] = useState("")
    const [para9, setPara9] = useState("")

    const [img10, setImg10] = useState("")
    const [para10, setPara10] = useState("")

    const [img11, setImg11] = useState("")
    const [para11, setPara11] = useState("")

    const [img12, setImg12] = useState("")
    const [para12, setPara12] = useState("")

    const getData = async () => {
        const snapshot = await getDocument(`Articles-${type.toLowerCase()}`, id);

        if (snapshot) {
            setHead(snapshot.header)

            setImg1(snapshot.image1)
            setPara1(snapshot.para1)

            setImg2(snapshot.image2)
            setPara2(snapshot.para2)

            setImg3(snapshot.image3)
            setPara3(snapshot.para3)

            setImg4(snapshot.image4)
            setPara4(snapshot.para4)

            setImg5(snapshot.image5)
            setPara5(snapshot.para5)

            setImg6(snapshot.image6)
            setPara6(snapshot.para6)

            setImg7(snapshot.image7)
            setPara7(snapshot.para7)

            setImg8(snapshot.image8)
            setPara8(snapshot.para8)

            setImg9(snapshot.image9)
            setPara9(snapshot.para9)

            setImg10(snapshot.image10)
            setPara10(snapshot.para10)

            setImg11(snapshot.image11)
            setPara11(snapshot.para11)

            setImg12(snapshot.image12)
            setPara12(snapshot.para12)
        } else {
            console.log(`Document could not be found in FireStore/Articles-${type.toLowerCase()}/`)
        }
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
            <Element
                header={head}
                para1={para1}
                image1={img1}
                para2={para2}
                image2={img2}
                para3={para3}
                image3={img3}
                para4={para4}
                image4={img4}
                para5={para5}
                image5={img5}
                para6={para6}
                image6={img6}
                para7={para7}
                image7={img7}
                para8={para8}
                image8={img8}
                para9={para9}
                image9={img9}
                para10={para10}
                image10={img10}
                para11={para11}
                image11={img11}
                para12={para12}
                image12={img12}
            />
        </>
    )

}

export default View;