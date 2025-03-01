import { useEffect, useState } from "react";
import axios from "axios";  // Asegúrate de importar axios

function History() {
  const [combinedData, setCombinedData] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchCombinedData = async () => {
      try {
        const response = await axios.get(`${API_URL}/operator-microservice/operation`);
        setCombinedData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener los datos combinados:", error);
      }
    };

    if (API_URL) fetchCombinedData();
  }, [API_URL]);
  return (
      <div className="history px-5">
        <h2>¡Últimas rentas y compras!</h2>
        <table className="history__table table table-dark table-striped">
          <thead className="history__table-head">
          <tr className="history__table-row">
            <th scope="col" className="history__table-header">Nombre</th>
            <th scope="col" className="history__table-header">Email</th>
            <th scope="col" className="history__table-header">Teléfono</th>
            <th scope="col" className="history__table-header">Nacionalidad</th>
            <th scope="col" className="history__table-header">Fecha de compra o renta</th>

          </tr>
          </thead>
          <tbody className="history__table-body">
          {combinedData.map((entry) => (
              <tr key={entry.id} className="history__table-row">
                <th scope="row" className="history__table-data">{entry.user.name}</th>
                <td className="history__table-data">{entry.user.email}</td>
                <td className="history__table-data">{entry.user.phone}</td>
                <td className="history__table-data">{entry.user.nationality}</td>
                <td className="history__table-data">{entry.operationDate}</td>

              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default History;
