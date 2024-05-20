// import React, { useEffect, useState } from 'react';
// import useAuth from '../../API/useAuth';
// import { getRole } from '../../API/auth';
// import { data } from 'autoprefixer';


// const useRole = () => {
//     const { user } = useAuth();
//     const [role, setRole] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         getRole(user?.email)
//             .then(data => {
//                 setRole(data);
//              })
//             .catch(error => {
//                 console.error('Error fetching role:', error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });

//     }, [user?.email]);

//     return [role, loading];
// };

// export default useRole;


import { useQuery } from "@tanstack/react-query";
import { getRole } from "../../API/auth";
import useAuth from "../../API/useAuth";


const useRole = () => {
    const { user, loading } = useAuth();
    const { data: userInfo, isLoading, refetch } = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async () => getRole(user?.email),
        queryKey: ['role']
    })
    return [userInfo, isLoading, refetch];
}

export default useRole;




