import React from 'react';
import PropTypes from 'prop-types';

export default function Die({ value, isHeld, holdDice }) {
  const styles = {
    backgroundColor: isHeld ? '#59E391' : 'white',
  };
  return (
    <div
      className="die-face"
      style={styles}
      role="button"
      tabIndex={0}
      onClick={holdDice}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          holdDice();
        }
      }}
    >
      <h2 className="die-num">{value}</h2>
    </div>
  );
}

Die.propTypes = {
  value: PropTypes.number.isRequired,
  isHeld: PropTypes.bool.isRequired,
  holdDice: PropTypes.func.isRequired,
};
