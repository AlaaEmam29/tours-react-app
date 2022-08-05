import React, { useEffect } from "react";
import Loading from "../Loading/Loading";
import Tours from "../Tours/Tours";

export default function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const removeTours = (id) => {
const newTours = tours.filter(tour => tour.id !== id)
setTours(newTours);
  }
if(loading) {
  return <React.Fragment><Loading/></React.Fragment>
}
if(tours.length===0) {
  return <div className="container">
 <h2> No tour Available Now</h2>
 <button onClick={()=>fetchData()} className="btn-ref">Refresh</button>
  </div>;
}
  return <div className="container">
  <Tours tours={tours} removeTours={removeTours}/>
  </div>;
}
