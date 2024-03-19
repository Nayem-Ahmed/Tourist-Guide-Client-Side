// import React from 'react';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import { FaCheck } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";

// const AboutTourSection = () => {
//     return (
//         <Tabs className="w-8/12  mt-5 mb-10 p-5 border">
//             <TabList>
//                 <Tab>DESCRIPTION</Tab>
//                 <Tab>ITINERARY</Tab>
//             </TabList>
//             <TabPanel>

//                 <p className='mb-4 via-gray-500'>Mattis interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.Id sodales morbi felis eu mus auctor ullamcorper. Litora. In nostra tempus, habitant. Nam tristique.
//                 </p>
//                 <p className='text-gray-500'> Felis venenatis metus placerat taciti malesuada ultricies bibendum nunc hymenaeos orci erat mollis pretium ligula ligulamus pellentesque urna. Sagittis bibendum justo congue facilisi. Aliquam potenti sagittis etiam facilisis vehicula. Id.</p>
//                 <div className="divider"></div>
//                 <div className=' '>
//                     <div>
//                         <div className="border p-3 mb-4 flex justify-between">
//                             <h1 className='font-medium text-gray-500'>DEPARTURE/RETURN LOCATION</h1>
//                             <p>San Francisco International Airport</p>
//                         </div>

//                         <div className="border p-3 mb-4 flex justify-between">
//                             <h1 className='font-medium text-gray-500'>DEPARTURE TIME</h1>
//                             <p>Please arrive at least 2 hours before the flight.</p>
//                         </div>

//                         <div className="border p-3 mb-4 flex justify-between">
//                             <h1 className='font-medium text-gray-500'>INCLUDED</h1>
//                             <ul>
//                                 <li className='flex items-center gap-1 '><FaCheck className='text-green-500'></FaCheck>Airfare</li>
//                                 <li className='flex items-center gap-1 '><FaCheck className='text-green-500'></FaCheck>Entrance fees</li>
//                             </ul>
//                         </div>

//                         <div className="border p-3 flex justify-between">
//                             <h1 className='font-medium text-gray-500'>NOT INCLUDED</h1>
//                             <ul>
//                                 <li className='flex items-center gap-1 '><RxCross2 className='text-red-500'></RxCross2>Meals</li>
//                                 <li className='flex items-center gap-1 '><RxCross2 className='text-red-500'></RxCross2>Accommodation</li>
//                             </ul>
//                         </div>
//                     </div>

//                 </div>



//             </TabPanel>



//         </Tabs>
//     );
// };

// export default AboutTourSection;


import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const AboutTourSection = () => {
    const [activeTab, setActiveTab] = useState(0); // State to track the active tab index

    return (
        <div className='p-5'>
            <Tabs className="md:w-11/12  mb-10 p-5 border-2 shadow-sm" selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                <TabList className="flex gap-4 mb-5">
                    <Tab style={activeTab === 0 ? { backgroundColor: 'tomato', color: 'white', padding: '10px', borderRadius: '20px', cursor: 'pointer' } : { backgroundColor: 'gray', padding: '10px', borderRadius: '20px', cursor: 'pointer' }}>DESCRIPTION</Tab>
                    <Tab style={activeTab === 1 ? { backgroundColor: 'tomato', color: 'white', padding: '10px', borderRadius: '20px', cursor: 'pointer' } : { backgroundColor: 'gray', padding: '10px', borderRadius: '20px', cursor: 'pointer' }}>ITINERARY</Tab>
                </TabList>
                <TabPanel>

                    <p className='mb-4 text-gray-500'>Mattis interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.Id sodales morbi felis eu mus auctor ullamcorper. Litora. In nostra tempus, habitant. Nam tristique.
                    </p>
                    <p className='text-gray-500'> Felis venenatis metus placerat taciti malesuada ultricies bibendum nunc hymenaeos orci erat mollis pretium ligula ligulamus pellentesque urna. Sagittis bibendum justo congue facilisi. Aliquam potenti sagittis etiam facilisis vehicula. Id.</p>
                    <div className="divider"></div>
                    <div className=' '>
                        <div>
                            <div className="border p-3 mb-4 md:flex justify-between">
                                <h1 className='md:font-medium text-gray-500'>DEPARTURE/RETURN LOCATION</h1>
                                <p>San Francisco International Airport</p>
                            </div>

                            <div className="border p-3 mb-4 md:flex justify-between">
                                <h1 className='font-medium text-gray-500'>DEPARTURE TIME</h1>
                                <p>Please arrive at least 2 hours before the flight.</p>
                            </div>

                            <div className="border p-3 mb-4 md:flex justify-between">
                                <h1 className='font-medium text-gray-500'>INCLUDED</h1>
                                <ul>
                                    <li className='flex items-center gap-1 '><FaCheck className='text-green-500'></FaCheck>Airfare</li>
                                    <li className='flex items-center gap-1 '><FaCheck className='text-green-500'></FaCheck>Entrance fees</li>
                                </ul>
                            </div>

                            <div className="border p-3 md:flex justify-between">
                                <h1 className='font-medium text-gray-500'>NOT INCLUDED</h1>
                                <ul>
                                    <li className='flex items-center gap-1 '><RxCross2 className='text-red-500'></RxCross2>Meals</li>
                                    <li className='flex items-center gap-1 '><RxCross2 className='text-red-500'></RxCross2>Accommodation</li>
                                </ul>
                            </div>
                        </div>

                    </div>



                </TabPanel>
                <TabPanel>
                    <div className="p-4 flex gap-4">
                        <div>
                            <h1  className='w-10 h-10 bg-[#ff7550] rounded-full text-center text-white text-2xl'>1</h1>
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl mb-3'>Day 1: Departure</h1>
                            <p className='text-gray-500 mb-6'>Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum.</p>
                            <li>Pretium vitae tempus sem enim enim.</li>
                            <li>Tempus, leo, taciti augue aliquam hendrerit.</li>
                            <li>Vulputate dictumst egestas etiam dictum varius.</li>
                        </div>
                    </div>
                    <div className="p-4 flex gap-4">
                        <div >
                            <h1 className='w-10 h-10 bg-[#ff7550] rounded-full text-center text-white text-2xl'>2</h1>
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl mb-3'>Day 2 </h1>
                            <p className='text-gray-500 mb-6'>Tortor elementum egestas metus potenti habitasse tempus natoque senectus commodo rutrum quisque fermentum. Nisi velit primis dapibus odio consequat facilisi sollicitudin porta nulla tellus sagittis platea tempor sed parturient convallis consectetuer Vulputate curae; pharetra.</p>

                        </div>
                    </div>
                    <div className="p-4 flex gap-4">
                        <div >
                            <h1 className='w-10 h-10 bg-[#ff7550] rounded-full text-center text-white text-2xl'>3</h1>
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl mb-3'>Day 3</h1>
                            <p className='text-gray-500 mb-6'>Fusce sagittis viverra lorem proin porttitor conubia risus vivamus. Mollis. Luctus curabitur porta nibh penatibus aliquet nec conubia magnis semper, sem feugiat scelerisque molestie. Nibh proin dapibus phasellus lacus. Facilisi.</p>

                        </div>
                    </div>
                    <div className="p-4 flex gap-4">
                        <div >
                            <h1 className='w-10 h-10 bg-[#ff7550] rounded-full text-center text-white text-2xl'>4</h1>
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl mb-3'>Day 4</h1>
                            <p className='text-gray-500 mb-6'>Egestas maecenas hac nullam integer at. Lacinia habitasse ridiculus sapien platea a cursus hendrerit tempor facilisi orci at tempor, senectus.

                            </p>

                        </div>
                    </div>
                    <div className="p-4 flex gap-4">
                        <div >
                            <h1 className='w-10 h-10 bg-[#ff7550] rounded-full text-center text-white text-2xl'>4</h1>
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl mb-3'>Day 6: Return</h1>

                        </div>
                    </div>


                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AboutTourSection;







