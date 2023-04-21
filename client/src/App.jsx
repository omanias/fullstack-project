import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/data");

        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {data ? (
        data.map((item, index) => <div key={index}>{item.NombreCompania}</div>)
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default App;
