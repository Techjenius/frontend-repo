import { Diversity1Outlined } from '@mui/icons-material';
import React from 'react';
import '../../styles/styles.css'

const SubmissionList = () => {

const SubList = [
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '12:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '12:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '12:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '12:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '12:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '12:30',
    },
]

    return(
        <div>
            <div>
                <Diversity1Outlined>
                {
                    SubList.map((list, index) => (
                        <div key={index} className='submissionGrid'>
                            <h3>{list.text}</h3>
                            <p>{list.paragraph}</p>
                            <p>{list.time}</p>
                        </div>
                    ))
                }
                </Diversity1Outlined>
            </div>
        </div>
    )
}

export default SubmissionList;