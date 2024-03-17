import React, { useEffect, useState } from 'react';
import { getTyperelatedData } from '../../API/package';
import Loader from '../../Components/Loader';
import { Link, useParams } from 'react-router-dom';

const TourTypeData = () => {
    const { id } = useParams(); // Get the ID parameter from the URL

    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchProductAndRelated = async () => {
            try {
                const data = await getTyperelatedData(id); // Pass the ID parameter to the API function
                if (data) {
                    setProduct(data.alltype);
                    setRelatedProducts(data.relatedType);
                } else {
                    throw new Error('No data received from the server');
                }
            } catch (error) {
                console.error('Error fetching tour type data:', error);
            }
        };

        fetchProductAndRelated();
    }, [id]);


    if (!product) {
        return <Loader />;
    }

    // Render product and related products here
    return (
        <div className='grid gap-5 md:grid-cols-3 mt-10'>
            {relatedProducts.map(relatedType => (
                <div key={relatedType._id} className="card card-compact rounded-sm  bg-base-100 shadow-xl">
                    <figure><img className='w-full h-64' src={relatedType.TouristImage} alt=" " /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{relatedType.tourType}</h2>
                        <p>{relatedType.tripTitle}</p>
                        <p className="text-2xl text-[#ff7550] font-semibold">${relatedType.price}</p>
                        <div className="card-actions ">
                            <Link to={`tourtype-Datatadetails/${relatedType._id}`}>
                                <button className="bg-[#ff7550] px-3 py-1 rounded-md text-white">View Package</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TourTypeData;
