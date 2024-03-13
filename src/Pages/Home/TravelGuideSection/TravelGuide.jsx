import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TravelGuide = () => {
    return (
        <div>
            <Tabs className="mx-auto block text-center mt-5 mb-10">
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <p>
                        Welcome to our Travel Guide! In this section, you can find comprehensive information about various destinations, attractions, and travel tips.
                        To make your experience more enjoyable, we've included exciting videos showcasing the beauty of each location.
                    </p>
                    {/* Include videos here */}
                </TabPanel>

                <TabPanel>
                    <h2 className="text-2xl font-bold mb-4">Our Packages</h2>
                    {/* Card components for packages */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg shadow-md p-4 w-72">
                            {/* Add trip to wishlist */}
                            <div className="flex justify-end">
                                <button className="text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 6h14M5 12h14m-7 6h7" />
                                    </svg>
                                </button>
                            </div>
                            {/* Tour details */}
                            <p className="text-sm font-bold">Tour Type: Adventure</p>
                            <p className="text-lg font-bold">Trip Title: Amazing Adventure in the Wilderness</p>
                            <p className="text-sm">Price: $1000</p>
                            {/* View package button */}
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700">View Package</button>
                        </div>
                        {/* Card 2 and Card 3 can be similar */}
                    </div>
                    {/* All Packages button */}
                    <div className="text-center mt-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">All Packages</button>
                    </div>
                </TabPanel>

                <TabPanel>
                    <h2 className="text-2xl font-bold mb-4">Meet Our Tour Guides</h2>
                    {/* Tour guide list */}
                    <div>
                        {/* Tour guide card components */}
                        {/* Each card displays tour guide information */}
                        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                            <p className="text-lg font-bold">Tour Guide Name</p>
                            <p className="text-sm">Location: City, Country</p>
                            <p className="text-sm">Experience: 10 years</p>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700">Details</button>
                        </div>
                        {/* Additional tour guide cards */}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelGuide;
