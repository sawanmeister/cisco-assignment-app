import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
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
      <h1 className="text-xl font-bold mb-4">TV Shows</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {shows.map((item) => (
          <div key={item.show.id} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold">{item.show.name}</h2>
            <img
              src={
                item.show.image
                  ? item.show.image.medium
                  : "https://via.placeholder.com/210x295"
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
