import React, { useEffect, useState } from 'react';
import { getBooking } from '../../API/package';
import useAuth from '../../API/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookData = await getBooking(user?.email);
                setBooking(bookData);
            } catch (error) {
                console.error('Error fetching booking:', error);
            }
        };

        fetchData();
    }, [user]);

    return (
        <div className="overflow-x-auto">
            {booking.length === 0 ? (
                <p className="text-center text-2xl my-9 text-gray-500">No bookings available</p>
            ) : (

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Tourist Image</th>
                        <th>Package Name</th>
                        <th>Tour Guide Name</th>
                        <th>Tour Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {booking?.map((book, index) => (
                        <tr key={index}>
                            <td><img className='w-14' src={book?.TouristImage} alt="" /></td>
                            <td>{book?.tourType}</td>
                            <td>{book?.tourGuideName}</td>
                            <td>{book?.tourDate}</td>
                            <td>{book?.price}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs bg-red-500 mr-2">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs bg-blue-500">Visit Details</button>
                            </td>
                        </tr>
                    ))}

                </tbody>


            </table>
            )}
        </div>
    );
};

export default MyBooking;

