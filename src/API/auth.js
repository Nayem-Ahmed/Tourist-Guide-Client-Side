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
// Get user role
export const getRole = async email => {
    const { data } = await axiosPublic(`/users/${email}`)
    return data
}

// get all users
export const getAllUsers = async () => {
    const { data } = await axiosPublic('/users')
    return data
}
