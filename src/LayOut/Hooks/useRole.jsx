import React, { useEffect, useState } from 'react';
import useAuth from '../../API/useAuth';
import { getRole } from '../../API/auth';
import { data } from 'autoprefixer';


const useRole = () => {
    const { user } = useAuth();
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getRole(user?.email)
            .then(data => {
                setRole(data?.role);
            })
            .catch(error => {
                console.error('Error fetching role:', error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [user?.email]);
    console.log(role);
    return [role, loading];
};

export default useRole;




