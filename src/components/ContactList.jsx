import React from 'react'
import { ContactItem } from './ContactItem'
import { SearchBox } from './SearchBox'

export const ContactList = () => {
  return (
    <div>
        <SearchBox />
        <ContactItem/>
    </div>
  )
}
