import useAuth from "../../API/useAuth"
import useRole from "../Hooks/useRole"

const Profile = () => {
    const { user } = useAuth()
    const [role] = useRole()

    return (
        <div className='flex justify-center items-center'>

            <div className='bg-white shadow-lg rounded-2xl md:w-3/5'>
                <img
                    alt='profile'
                    src='http://wahabali.com/work/travelu/images/parallax/bgparallax-01.jpg'
                    className='w-full mb-4 rounded-t-lg md:h-48'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-20'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full md:h-32 md:w-32 border-2 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
                        {role && role.toUpperCase()}
                    </p>
                    <p className='mt-2 md:text-xl md:font-medium text-gray-800 '>
                        User Id: {user.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user?.email}</span>
                            </p>

                            <div>
                                <button className='bg-[#ff7550] md:px-8 py-1 px-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                    Update Profile
                                </button>
                                <button className=' bg-[#ff7550] md:px-5 py-1 px-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
