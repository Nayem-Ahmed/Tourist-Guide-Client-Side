import React, { useState } from 'react';
import { getAllBooking } from '../../API/package';
import { changeRole } from '../../API/auth';

const MyAssignedTours = () => {
    const [allbooking, setAllBooking] = useState([]);
    console.log(allbooking);

    useState(() => {
        const fetchData = async () => {
            try {
                const AllbookData = await getAllBooking();
                setAllBooking(AllbookData)

            } catch (error) {
                console.error('Error fetching booking:', error);

            }
        };
        fetchData();
    }, [])
    const handleRoleRejected = async (role) => {
        const reject = await changeRole(role)
        console.log(reject);
    }
    return (
        <div className="overflow-x-auto">
            {allbooking.length === 0 ? (
                <p className="text-center text-2xl my-9 text-gray-500">No  Booking added</p>

            ) : (

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Package Name</th>
                            <th>Toueist Name</th>
                            <th>Tour Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {allbooking?.map((booked, index) => (
                            <tr key={index}>
                                <td>{booked?.tourType}</td>
                                <td>{booked?.name}</td>
                                <td>{booked?.tourDate}</td>
                                <td>${booked?.price}</td>
                                <td>
                                    {booked?.status === "review" && (
                                        <>
                                            <button className="btn btn-ghost btn-xs bg-blue-500 mr-2">Accept</button>
                                            <button onClick={() => handleRoleRejected(booked._id)} className="btn btn-ghost btn-xs bg-red-500">Reject</button>
                                        </>
                                    )}
                                    {booked?.status === "accepted" && (
                                        <button className="btn btn-ghost btn-xs bg-blue-500 mr-2" disabled>Accepted</button>
                                    )}
                                    {booked?.status === "rejected" && (
                                        <button className="btn btn-ghost btn-xs bg-blue-500 mr-2" disabled>Rejected</button>
                                    )}
                                </td>


                            </tr>
                        ))}

                    </tbody>


                </table>
            )}
        </div>
    );
};

export default MyAssignedTours;