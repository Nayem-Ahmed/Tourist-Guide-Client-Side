import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../API/auth';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        getAllUsers()
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);
    const makeAdmin = () => {

    };

    const makeTourGuide = () => {

    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Make Tour Guide</th>
                    </tr>
                </thead>
                <tbody>

                    {users?.map((userone, index) => (
                        <tr key={index}>
                            <td>{userone?.name}</td>
                            <td>{userone?.email}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={userone?.photo} alt="Avatar" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{userone?.role}</td>
                            <td>
                                <button onClick={() => makeAdmin(userone.id)} className="btn btn-ghost btn-xs bg-[#ff7550]">Make Admin</button>
                            </td>
                            <td>
                                <button onClick={() => makeTourGuide(userone.id)} className="btn btn-ghost btn-xs bg-[#ff7550]">Make Tour Guide</button>
                            </td>
                        </tr>
                    ))}

                </tbody>


            </table>
        </div>
    );
};

export default ManageUser;
