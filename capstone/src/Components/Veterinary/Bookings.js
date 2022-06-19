import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const Bookings = () => {
  const { bookingItems } = useSelector((state) => state.bookings)
  return (
    <BookingContainer>
        {
          bookingItems.map ((data, index) =>(
             <div className='bookcontainer' key={index} >
        <div style={{width:'300px',margin:'20px'}}>
      <img src={data.Image} alt= ''style={{width: '200px',height : '200px' , marginRight: '20px',}} />
      <h2 style={{color: "#4b70e2"}}>Slot: {data.slots}</h2>
      <h2>{data.Service}</h2>
      </div>
      <div style={{margin: '20px',width:"300px"}}>
      <h2>Fee: ₹{data.price}</h2>
      <h2>Name: {data.FirstName}{data.LastName}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Contact: {data.ContactNO}</h2>
      <h2>Fee: {data.Address}</h2>
      </div>
      </div> 
          ))
        }
    </BookingContainer>
  )
}

const BookingContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 2rem;
margin-bottom: 100px;
.bookcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 15px;
  width: 400px;
  height: 480px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    2px 2px 5px rgba(94, 104, 121, 0.3);
}
`
export default Bookings