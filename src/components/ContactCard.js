import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ContactCard({ contact }) {
    const [showAge, setShowAge] = useState(false)
    return (
        <div className='contact-card'>
            <div className='img'>
                <img src={contact.picture.large} alt='profile' />
            </div>
            <div className='contact-info'>
                <h2>{contact.name.first} {contact.name.last}</h2>
                <Link to={contact.email}>{contact.email}</Link>
                <button className='age-btn' onClick={() => setShowAge(!showAge)} >{
                    showAge ? 'Hide Age' : 'Show Age'
                }</button>
                <p>{showAge ? contact.dob.age : ''}</p>
            </div>
        </div>
    )
}
