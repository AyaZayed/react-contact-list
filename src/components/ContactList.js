import React from 'react'
import { useState, useEffect } from 'react'
import ContactCard from './ContactCard'

export default function ContactList() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => {
                setContacts(data.results)
            })
    }, [])

    return (
        <div className='contact-list'>
            {contacts.map(contact => {
                return (
                    <ContactCard key={contact.id} contact={contact} />
                )
            })}
        </div>
    )
}
