import React, { useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase'

const Search = () => {
  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {

    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true);
    }

  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const res = await getDocs(db,"chats",)
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input 
          type='text' 
          placeholder='find a user' 
          onKeyDown={handleKey} 
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {err && <span>User not found</span>}
      {user && <div className='userChat' onClick={handleSelect}>
        <img src={user.photoURL} 
             alt='' />
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search