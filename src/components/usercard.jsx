// write the component code here
import React from 'react';

const Usercard=()=>{
    //user details
    const profilePhoto="https://cdn.britannica.com/97/258697-050-926B4240/actor-jacob-elordi-at-saltburn-film-premiere-the-theatre-at-ace-hotel-los-angeles-november-14-2023.jpg";
    const name="Jacob Elordi";
    const email="jacobelordi@gmail.com";
    const phone="+100 8929938271";
    const address="123 Main Street, Springfield, USA";

    return(
        <div className="user-card">
            <img className="user-pic" src={profilePhoto} alt="Profile" style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
            <div className="user-info">
                <h2 className='user-name'>Name: {name}</h2>
                <p className='user-email'>Email: {email}</p>
                <p className="user-phone">Phone: {phone}</p>
                <p className="user-address">Address: {address}</p>
            </div>
        </div>
    );
};

export default Usercard;
