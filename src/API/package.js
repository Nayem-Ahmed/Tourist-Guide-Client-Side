import axiosPublic from "./axiosPublic"

// Add package (post) databse
export const AddPackagePost = async (packagedata) => {
    const { addData } = await axiosPublic.post('/addpackage', packagedata)
    return addData;
}
// 
export const AddWishlistPost = async (wishlistdata) => {
    const { addData } = await axiosPublic.post('/wishlist', wishlistdata)
    return addData;
}