import React, { useState, useEffect } from 'react';
import { getWishList } from '../../API/package';
import useAuth from '../../API/useAuth';

const MyWishlist = () => {
    const { user } = useAuth();
    const [wishlistData, setWishlistData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const wishlistData = await getWishList(user?.email);
                setWishlistData(wishlistData); // Update state with wishlist data
            } catch (error) {
                console.error('Error fetching wishlist:', error);
                // Handle the error if needed
            }
        };

        fetchData();
    }, [user]); // Include user in dependency array to re-fetch wishlist data when user changes

    const handleDelete = async (wishlistId) => {
        // Handle deletion of wishlist item with ID wishlistId
    };

    const handleVisitDetails = (packageId) => {
        // Handle visit details for package with ID packageId
    };

    return (
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>Tour Type</th>
                    <th>Tour Guide Name</th>
                    <th>Delete</th>
                    <th>Visit Details</th>
                </tr>
            </thead>
            <tbody>

                {wishlistData?.map((wishlist, index) => (
                    <tr key={index}>
                        <td>{wishlist?.tourType}</td>
                        <td>{wishlist?.tourGuideName}</td>
                        <td>
                        <button onClick={() => handleDelete(wishlist.id)} className="btn btn-ghost btn-xs bg-red-500 mr-2">Delete</button>
                        </td>
                        <td>
                        <button onClick={() => handleVisitDetails(wishlist.packageId)} className="btn btn-ghost btn-xs bg-blue-500">Visit Details</button>
                        </td>
                    </tr>
                ))}

            </tbody>


        </table>
    </div>
    );
};

export default MyWishlist;
