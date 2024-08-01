// this file is just a skeleton, and will be used as an fallback element for github user card.
const UserCardSkeleton = () => {
  return (
    <div className="bg-[#333333] p-6 rounded-lg shadow-lg  animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-700 rounded w-24 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
          <div className="w-full flex justify-between">
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-700 rounded w-16"></div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 justify-center my-6">
        <div className="h-4 bg-gray-700 rounded w-16"></div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex space-x-2">
          <div className="h-4 bg-gray-700 rounded w-16"></div>
          <div className="h-4 bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
