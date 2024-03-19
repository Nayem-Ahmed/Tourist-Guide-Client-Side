import axiosPublic from "./axiosPublic"

// Add package (post) databse
export const AddPackagePost = async (packagedata) => {
    const { addData } = await axiosPublic.post('/addpackage', packagedata)
    return addData;
}
// related data get
export const getTyperelatedData = async (id) => {
    const { data } = await axiosPublic(`/tourtypebtdata/${id}`);
    return data;
}
// wishlist
export const AddWishlistPost = async (wishlistdata) => {
    const { addData } = await axiosPublic.post('/wishlist', wishlistdata)
    return addData;
}

// Get wishlists by params
export const getWishList = async (email) => {
    const { data } = await axiosPublic(`/wishlist/${email}`)
    return data;
}
//Delete booking
export const deleteWishlist = async (deletewish) => {
    const { deletedata } = await axiosPublic.delete(`/wishlist/${deletewish}`)
    return deletedata;
}
// add booking 
export const AddBookingPost = async (book) => {
    const { addData } = await axiosPublic.post('/booking', book)
    return addData;
}
//Delete booking
export const deleteBooking = async (deletebook) => {
    const { deletedata } = await axiosPublic.delete(`/booking/${deletebook}`)
    return deletedata;
}
// Get wishlists by params
export const getBooking = async (email) => {
    const { data } = await axiosPublic(`/booking/${email}`)
    return data;
}