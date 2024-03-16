import React, { useEffect, useState } from 'react';
import { getTyperelatedData } from '../../API/package';
import Loader from '../../Components/Loader';
import { useParams } from 'react-router-dom';

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
        <div className='grid gap-6 grid-cols-5 mt-10'>
            {relatedProducts.map(relatedType => (
                <div key={relatedType._id} className="card card-compact rounded-sm  bg-base-100 shadow-xl">
                    <figure><img className='w-full h-56' src={relatedType.TouristImage} alt=" " /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{relatedType.tourType}</h2>
                        <p>{}</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TourTypeData;
