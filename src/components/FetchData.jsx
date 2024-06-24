import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = ({ cat }) => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const url = cat
      ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=52bdcd7f129e42d0972376c24a4f501d`
      : 'https://newsapi.org/v2/top-headlines?country=in&apiKey=52bdcd7f129e42d0972376c24a4f501d';

    try {
      const res = await axios.get(url);
      setData(res.data.articles);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h3><u>TOP HEADLINES</u></h3>
      <div className="row">
        {Data.length > 0 ? Data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={item.urlToImage}
                alt="Not available"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">View More</a>
              </div>
            </div>
          </div>
        )) : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default FetchData;
