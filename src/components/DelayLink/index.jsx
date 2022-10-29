import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Functional link component which delays page navigation
export const DelayLink = (props) => {
  const { delay, onDelayStart, onDelayEnd, replace, to, ...rest } = props;
  let timeout = null;
  let history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = (e) => {
    // if trying to navigate to current page stop everything
    if (location?.pathname === to) return;

    if (e.defaultPrevented) {
      return;
    }

    onDelayStart(e, to);

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        history(to, { replace: true });
      } else {
        history(to);
      }
      onDelayEnd(e, to);
    }, delay);
  };

  return <Link {...rest} to={to} onClick={handleClick} />;
};

DelayLink.propTypes = {
  // Milliseconds to wait before registering the click.
  delay: PropTypes.number,
  // Called after the link is clicked and before the delay timer starts.
  onDelayStart: PropTypes.func,
  // Called after the delay timer ends.
  onDelayEnd: PropTypes.func,
  // Replace history or not
  replace: PropTypes.bool,
  // Link to go to
  to: PropTypes.string,
};

DelayLink.defaultProps = {
  replace: false,
  delay: 0,
  onDelayStart: () => {},
  onDelayEnd: () => {},
};
