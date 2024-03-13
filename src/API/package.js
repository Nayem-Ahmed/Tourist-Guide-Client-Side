import axiosPublic from "./axiosPublic"

// Add package (post) databse
export const AddPackagePost = async (packagedata) => {
    const { addData } = await  axiosPublic.post('/addpackage', packagedata)
    return addData
  }