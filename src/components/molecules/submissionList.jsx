import React from 'react';
import '../../styles/styles.css'

const SubmissionList = () => {

const SubList = [
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '11:30',
    },
    {
        text: 'Bamigboye Joshua Promise',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '1:30',
    },
    {
        text: 'Rachel Bobai Swanta',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '4:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '10:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '2:30',
    },
    {
        text: 'Chiamaka Confidence Nwankwo',
        paragraph: 'Twitter offers a wide range of services and products ',
        time: '1:30',
    },
]

    return(
        <div>
            <div>
                <div className='w-[100%] h-[200px] md:h-[100px] overflow-auto'>
                {
                    SubList.map((list, index) => (
                        <div key={index} className='submissionGrid cursor-pointer whitespace-nowrap'>
                            <h3 className='self-start text-start'>{list.text}</h3>
                            <p className='self-center text-center border border-blue-200'>{list.paragraph}</p>
                            <p className='self-center text-center'>{list.time}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default SubmissionList;