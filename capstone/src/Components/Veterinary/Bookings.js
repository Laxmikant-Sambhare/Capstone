import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const Bookings = () => {
  const { bookingItems } = useSelector((state) => state.bookings)
  return (
    <div style={{display:'flex', justifyContent: "center",alignItems: "center"}}>
        {
          bookingItems.map ((data, index) =>(
            <>
             <div key={index} style={{display:'flex', width: '500px',}}>
        <div style={{width:'300px',margin:'20px'}}>
      <img src={data.Image} alt= ''style={{width: '200px',height : '200px' , marginRight: '20px',}} />
      <h2>{data.Service}</h2>
      </div>
      <div>
      <h2>Fee: ₹{data.price}</h2>
      <h2>Name: {data.FirstName}{data.LastName}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Contact: {data.ContactNO}</h2>
      <h2>Fee: {data.Address}</h2>
      </div>
      </div> 
            </>
          ))
        }
    <Bottomtab/>
    </div>
  )
}

const Bottomtab = styled.div`
height:100px;
`
export default Bookings