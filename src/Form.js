import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ cardHolderNameProp, cardNumberProp }) {
  const [cardHolderName, setCardHolderName] = useState(
    cardHolderNameProp || ''
  );
  const [cardNumber, setCardNumber] = useState(cardNumberProp || '');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateName(cardHolderName) ||
      !validateCardNumber(cardNumber) ||
      !validateExpiryMonth(expiryMonth) ||
      !validateExpiryYear(expiryYear) ||
      !validateCvc(cvc)
    ) {
      setError(true);
    } else {
      setError(false);
      setIsSubmitted(true); // Set the submission status to true if all validations pass
    }
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const validateCardNumber = (number) => {
    const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    return regex.test(number);
  };

  const validateExpiryMonth = (month) => {
    // Use a regular expression to check if the expiry month is in the "MM" format
    const regex = /^(0[1-9]|1[0-2])$/;
    return regex.test(month);
  };

  const validateExpiryYear = (year) => {
    // Use a regular expression to check if the expiry year is in the "YY" format
    const regex = /^\d{2}$/;
    return regex.test(year);
  };

  const validateCvc = (cvc) => {
    // Check if the CVC is a 3-digit number
    const regex = /^\d{3}$/;
    return regex.test(cvc);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="cardname">
          <label className="cardholder">CARDHOLDER NAME</label> <br />
          <input
            className="name"
            placeholder="e.g. Jane Appleseed"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
        </div>
        {error && !validateName(cardHolderName) ? (
          <label className="error-name">Cardholder name required</label>
        ) : null}

        <div className="cardnumber">
          <label className="cardholder">CARD NUMBER</label> <br />
          <input
            placeholder="e.g. 1234 5678 9123 0000"
            className="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        {error && !validateCardNumber(cardNumber) ? (
          <label className="error-number">Card number required</label>
        ) : null}

        <div className="expirydate">
          <label className="expiry-label">EXP.DATE (MM/YY)</label> <br />
          <label className="cvc-label">CVC</label> <br />
          <div className="expiry-month">
            {/* <label className="expiry-label">EXP.DATE (MM/YY)</label> */}
            <input
              placeholder="e.g. 12"
              className="expirydate-input"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
          </div>
          <div className="expiry-year">
            {/* <label className="expiry-label">YY</label> */}
            <input
              placeholder="e.g. 23"
              className="expiryyear-input"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </div>
          <div className="cvc">
            {/* <label className="cvc-label">CVC</label> <br /> */}
            <input
              placeholder="e.g. 123"
              className="cvc-input"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        {error &&
        (!validateExpiryMonth(expiryMonth) ||
          !validateExpiryYear(expiryYear)) ? (
          <label className="error-Expiry-Date">
            Expiry date required (MM/YY)
          </label>
        ) : null}

        {error && !validateCvc(cvc) ? (
          <label className="error-cvc">CVC must be numeric</label>
        ) : null}

        <div>
          <button className="confirm" type="submit">
            Confirm
          </button>
        </div>
      </form>

      {isSubmitted && !error ? (
        <div className="confirmation">
          <p className="displayNumber">{cardNumber}</p>
          <p className="displayName">{cardHolderName}</p>
          <p className="displayDate">
            {expiryMonth}/{expiryYear}
          </p>
          <p className="displayCvc">{cvc}</p>
        </div>
      ) : (
        <div className="confirmation">
          <p className="displayNumber">0000 0000 0000 0000</p>
          <p className="displayName">JANE APPLESEED</p>
          <p className="displayDate">00/00</p>
          <p className="displayCvc">000</p>
        </div>
      )}
    </>
  );
}

Form.propTypes = {
  cardHolderNameProp: PropTypes.string,
  cardNumberProp: PropTypes.string,
};

Form.defaultProps = {
  cardNumber: '0000 0000 0000 0000',
  cardHolderName: 'JANE APPLESEED',
  expiryMonth: '12',
  expiryYear: '23',
  cvc: '123',
};
