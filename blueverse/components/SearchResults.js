import React from 'react';

const SearchResults = ({ results, loading, searchTerm }) => {
  if (loading) {
    return <div className="text-center py-8">Searching...</div>;
  }

  if (!results.length && searchTerm) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No products found for "{searchTerm}"</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {results.map((product) => (
        <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold text-blue-600">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;