import axiosPublic from "./axiosPublic"

// Save user data in database
export const saveUser = async (user) => {
    const currentUser = {
        email: user?.email,
        role: 'tourist',
    }
    const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser)

    return data;
}