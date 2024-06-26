import axiosPublic from "./axiosPublic"

// Save user data in database
export const saveUser = async (user) => {
    const currentUser = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        role: 'tourist',
    }
    const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser)

    return data;
}
// Get user role
export const getRole = async (email) => {
    const { data } = await axiosPublic(`/users/${email}`)
    return data
}

// get all users
export const getAllUsers = async () => {
    const { data } = await axiosPublic('/users')
    return data
}
// update user
export const updateProfile = async (email, updateInfo) => {
    const { data } = await axiosPublic.patch(`/updateProfile/${email}`, updateInfo);
    return data;
}
// change role rejected
export const changeRole = async (id) => {
    const { data } = await axiosPublic.patch(`/booking/${id}`)
    return data;

}
// change role rejected
export const changeRoleAccepted = async (id) => {
    const { data } = await axiosPublic.patch(`/booking/id/${id}`)
    return data;

}


