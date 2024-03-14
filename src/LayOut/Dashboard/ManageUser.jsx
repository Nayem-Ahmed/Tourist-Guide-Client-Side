import React, { useEffect, useState } from 'react';
import useAuth from '../../API/useAuth';
import { getAllUsers } from '../../API/auth';

const ManageUser = () => {
    const { user } = useAuth();
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
                            <td>{user?.displayName}</td>
                            {/* user asche authprovider theke */}
                            <td>{userone?.email}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} alt="Avatar" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{userone?.role}</td>
                            {/* usersone asche map kore */}
                            <td>
                                <button onClick={() => makeAdmin(user.id)} className="btn btn-ghost btn-xs bg-[#ff7550]">Make Admin</button>
                            </td>
                            <td>
                                <button onClick={() => makeTourGuide(user.id)} className="btn btn-ghost btn-xs bg-[#ff7550]">Make Tour Guide</button>
                            </td>
                        </tr>
                    ))}
                    {/* row 1 */}
                    {/* <tr>
                        <td>
                             <h1>gggggggg</h1>
                        </td>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
          
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr> */}

                </tbody>


            </table>
        </div>
    );
};

export default ManageUser;
