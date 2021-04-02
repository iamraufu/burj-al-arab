import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
      const [bookings, setBookings] = useState([]);
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      useEffect(() => {
            fetch('http://localhost:5000/bookings?email='+ loggedInUser.email)
                  .then((response) => response.json())
                  .then(data => setBookings(data))
      }, [])
      return (
            <div>
                  <h3>You have {bookings.length} Bookings!</h3>
                  {
                        bookings.map(book => <li style={{ listStyleType: 'none' }}>{book.name} from: {(new Date(book.checkIn)).toDateString('dd/MM/yyyy')} to: {(new Date(book.checkOut)).toDateString('dd/MM/yyyy')}</li>)
                  }
            </div>
      );
};

export default Bookings;