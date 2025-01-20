import { useEffect, useState } from "react";
import { getMovieRentals, getMovies, getMovieSales } from "../../api/dbUtils";

function History() {
  const [rentals, setRentals] = useState([]);
  const [sales, setSales] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchedRentals = getMovieRentals();
    setRentals(fetchedRentals);
  }, []);

  useEffect(() => {
    const fetchedSales = getMovieSales();
    setSales(fetchedSales);
  }, []);

  useEffect(() => {
    const combinedData = [];
    rentals.forEach(rental => combinedData.push(rental));
    sales.forEach(sale => combinedData.push(sale));
    setCombinedData(combinedData);
  }, [rentals, sales]);

  return (
    <div className="history px-5">
      <table className="history__table table table-dark table-striped">
        <thead className="history__table-head">
        <tr className="history__table-row">
          <th scope="col" className="history__table-header">ID</th>
          <th scope="col" className="history__table-header">Nombre</th>
          <th scope="col" className="history__table-header">Email</th>
          <th scope="col" className="history__table-header">Teléfono</th>
          <th scope="col" className="history__table-header">Dirección</th>
          <th scope="col" className="history__table-header">Días de renta</th>
        </tr>
        </thead>
        <tbody className="history__table-body">
        {combinedData.map((entry) => (
          <tr key={entry.id} className="history__table-row">
            <th scope="row" className="history__table-data">{entry.id}</th>
            <td className="history__table-data">{entry.name}</td>
            <td className="history__table-data">{entry.email}</td>
            <td className="history__table-data">{entry.phone}</td>
            <td className="history__table-data">{entry.direction}</td>
            <td className="history__table-data">{entry.days}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
