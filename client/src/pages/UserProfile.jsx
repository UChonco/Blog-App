import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../images/avatar15.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar]=useState(Avatar)
  const[name, setName] =useState('')
  const[email, setEmail] =useState('')
  const[currentPassword,setCurrentPassword] =useState('')
  const[newpassword,setNewPassword] =useState('')
  const[confirmnewpassword,setConfirmNewPassword] =useState('')

  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className="btn">
          My post
        </Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={Avatar} alt="" />
            </div>
            <form action="" className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                accept="png,jpg,jpeg"
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile__avatar-btn">
              <FaCheck />
            </button>
          </div>
            <h1>Ernest Achiever</h1>

            <form action="" className="form profile__form">
              <p className="form__error-message">Error Message</p>
              <input type="text" placeholder='Full name' value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder='CurrentPassword' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
              <input type="password" placeholder='New Password' value={newpassword} onChange={e => setNewPassword(e.target.value)} />
              <input type="password" placeholder='Confirm new password' value={confirmnewpassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <button type="submit" className='btn primary'>Update Details</button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default UserProfile
