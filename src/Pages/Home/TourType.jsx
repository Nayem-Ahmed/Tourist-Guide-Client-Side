import { useEffect, useState } from "react";
import axiosPublic from "../../API/axiosPublic";
import { Link } from "react-router-dom";


const TourType = () => {
    const [tourtype, setTourtype] = useState([]);

    useEffect(() => {
        axiosPublic.get('/addpackage')
            .then(response => setTourtype(response.data))
            .catch(error => console.error('Error fetching packages:', error));
        console.log(tourtype);
    }, []);
    return (
        <div className='grid gap-6 md:grid-cols-4 p-5'>
            {tourtype.map((tour) => (
                <Link to={`/tourtypedetails/${tour._id}`} key={tour._id}>
                    <img className=' md:h-48 md:w-48 mb-4' src={tour?.TouristImage} alt="" />
                    <p className="text-lg text-white relative -mt-14 ml-5 font-medium">{tour?.tourType}</p>
                </Link>
            ))}
        </div>
    );
};

export default TourType;