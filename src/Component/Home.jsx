import { useState, useEffect } from 'react';

const Home = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
  
  
    useEffect(() => {
      fetchInfo();
    }, []);
  
    return (
      <div className="App">
          {data.map((dataObj, index) => {
            return (
              <div key={index}>
                <p>{dataObj.name}</p>
              </div>
            );
          })}
      </div>
    );
  }
export default Home;