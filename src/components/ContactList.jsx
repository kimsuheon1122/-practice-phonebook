import React from 'react'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider'
import { useSelector } from 'react-redux'
import { ContactItem } from './ContactItem'
import { SearchBox } from './SearchBox'

export const ContactList = () => {
  const book = useSelector((state)=>state.contactList);
  console.log(book)
  return (
    <div>
        <SearchBox />
        {book.map((item)=>(
          <ContactItem itme={item}/>
          //item={item} 바로 자식으로 보낼때는 굳이 리덕스 까지 쓰지 않음
        ))}
    </div>
  )
}
