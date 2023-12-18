import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ onLogout }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=golden%20girls"
        );
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">TV Shows</h1>
        <button
          onClick={onLogout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shows.map((item) => (
          <div key={item.show.id} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold">{item.show.name}</h2>
            <img
              src={
                item.show.image
                  ? item.show.image.original
                  : "https://via.placeholder.com/300x450"
              }
              alt={item.show.name}
              className="rounded mb-2"
            />
            <p>
              {item.show.summary
                ? item.show.summary.replace(/<[^>]+>/g, "")
                : "No description available."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
