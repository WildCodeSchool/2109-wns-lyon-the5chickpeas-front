import React from 'react'
import SideBar from '../components/SideBar'
import HeadBar from '../components/HeadBar'

function Profile() {
    return (
        <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center', margin: '50px'}}>
            <HeadBar/>
            <SideBar/>
            <h1>Profile Page</h1>
        </div>
    )
}

export default Profile
