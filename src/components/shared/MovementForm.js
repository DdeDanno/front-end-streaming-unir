import { useState } from "react";
import { useNavigate } from "react-router";

function MovementForm({ movementType }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [rentalTime, setRentalTime] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const navigate = useNavigate(); // Hook de react-router para poder nacer navegación

  const handleSubmit = (event) => {
    event.preventDefault();

    const information = {
      name,
      email,
      phone,
      address,
      rentalTime: movementType === 'Renta' ? rentalTime : 'N/A',
      acceptedTerms,
    };

    //addMovement(movementType, information); -> se actualizaria si hubiera backend

    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setRentalTime('');
    setAcceptedTerms(false);

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__fields mb-3">
        <label htmlFor="name" className="form__fields-label">Nombre</label>
        <input
          className="form__fields-input form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form__fields mb-3">
        <label htmlFor="email" className="form__fields-label">Correo</label>
        <input
          type="email"
          className="form__fields-input form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__fields mb-3">
        <label htmlFor="phone" className="form__fields-label">Teléfono</label>
        <input
          type="tel"
          className="form__fields-input form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form__fields mb-3">
        <label htmlFor="address" className="form__fields-label">Dirección</label>
        <input
          className="form__fields-input form-control"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      {movementType === 'Renta' && (
        <div className="form__fields mb-3">
          <label htmlFor="rentalTime" className="form__fields-label">Tiempo de Renta (en días)</label>
          <input
            type="number"
            className="form__fields-input form-control"
            id="rentalTime"
            value={rentalTime}
            onChange={(e) => setRentalTime(e.target.value)}
          />
        </div>
      )}
      <div className="form__fields mb-3 form-check">
        <input
          type="checkbox"
          className="form__fields-checkbox form-check-input"
          id="exampleCheck1"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <label className="form__fields-label form-check-label" htmlFor="exampleCheck1">
          Aceptar términos y condiciones
        </label>
      </div>

      <button type="submit" className="movement-form__submit-btn btn btn-success">
        Enviar
      </button>
    </form>
  );
}

export default MovementForm;
