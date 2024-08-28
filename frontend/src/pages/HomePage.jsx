import React, { useState } from 'react';
import Banner from '../components/Banner';
import BusinessCard from '../components/BusinessCard';

const HomePage = () => {
  // Sample data for businesses
  const allBusinesses = [
    { id: 1, logoUrl: '/images/1.jpg', name: 'Bangla Craft', years: 10, products: 120, likes: 240 },
    { id: 2, logoUrl: '/images/business1.jpg', name: 'Bdcreation', years: 5, products: 85, likes: 150 },
    { id: 3, logoUrl: '/images/2.jpg', name: 'Filingbuzz', years: 10, products: 100, likes: 140 },
    { id: 4, logoUrl: '/images/3.PNG', name: 'Aarong', years: 3, products: 285, likes: 150 },
    { id: 5, logoUrl: '/images/4.jpg', name: 'Traditional pottery Bangladesh', years: 9, products: 895, likes: 240 },
    { id: 6, logoUrl: '/images/5.jpg', name: 'Artist Bangladesh', years: 5, products: 85, likes: 150 },
    { id: 7, logoUrl: '/images/6.jpg', name: 'Bongobeena', years: 10, products: 120, likes: 240 },
    { id: 8, logoUrl: '/images/7.jpg', name: 'Pottery Art', years: 5, products: 85, likes: 150 },
    { id: 9, logoUrl: '/images/8.jpg', name: 'Handloom Sharee', years: 4, products: 200, likes: 180 },
    { id: 10, logoUrl: '/images/9.jpg', name: 'Mud pot business', years: 6, products: 150, likes: 170 },
    // Add more businesses here...
  ];

  const [visibleCount, setVisibleCount] = useState(8); // Default to show the first 8 businesses

  const handleViewAll = () => {
    setVisibleCount(allBusinesses.length); // Show all businesses
  };

  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Business Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allBusinesses.slice(0, visibleCount).map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
        {visibleCount < allBusinesses.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600"
            >
              See More
            </button>
          </div>
        )}
      </section>

      {/* Extra Sections */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Importance and History of Handicrafts in Bangladesh</h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-100">
          Bangladesh has a rich tradition of handicrafts that dates back centuries...
          {/* Add more details about the history and significance of handicrafts here */}
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Add cards for featured products */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
