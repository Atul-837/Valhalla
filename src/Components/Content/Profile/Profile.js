import React from "react";
import { useState } from "react";
import "./Profile.css";
export default function Profile() {
  const [profileData, setProfileData] = useState(
    { firstName: "", lastName: "", email: "", phoneNumber: "",membership: false },
  );

  console.log(profileData);
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setProfileData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox"? checked : value
      }
    })
  }
  
  return (
    <div className="form-container col-4">
      <form>
        <input
          className="form"
          type="text"
          name="firstName"
          value={profileData.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          className="form"
          type="text"
          name="lastName"
          value={profileData.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          className="form"
          type="email"
          name="email"
          value={profileData.email}
          placeholder="Email Address"
          onChange={handleChange}
        />
        <input
          className="form"
          type="number"
          name="phoneNumber"
          value={profileData.phoneNumber}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input 
        id="member"
        type="checkbox"
        name="membership"
        checked={FormData.membership}
        onChange={handleChange}
        />
        <label htmlFor="member"> Would you like to get updates regading upcoming events?</label>
        <br/>
        <br/>
        <button type="submit" className="btn btn-dark">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
