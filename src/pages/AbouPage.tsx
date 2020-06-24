import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Information Page</h1>
            <button className='btn' onClick={() => history.push('/react-io')}>
                Обратно к списку дел
            </button>
        </>
    )
}