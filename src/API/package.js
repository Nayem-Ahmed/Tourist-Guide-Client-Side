import axiosPublic from "./axiosPublic"

// Add package (post) databse
export const AddPackagePost = async (packagedata) => {
    const { addData } = await axiosPublic.post('/addpackage', packagedata)
    return addData;
}
// related data get
 export const  getTyperelatedData=async(id)=>{
    const{data}=await axiosPublic(`/tourtypebtdata/${id}`);
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
// add booking 
export const AddBookingPost = async (book) => {
    const { addData } = await axiosPublic.post('/booking', book)
    return addData;
}