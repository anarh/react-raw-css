import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ICON_SIZE = {
  high: 48,
  low: 24,
  tiny: 16
};

const Icon = ({ ariaHidden, ariaLabel, className, name, resolution, role, viewBox }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    className={classnames(`visa-ui-icon--${resolution}`, className)}
    viewBox={`0 0 ${viewBox || ICON_SIZE[resolution]} ${viewBox || ICON_SIZE[resolution]}`}
    focusable="false"
    role={role}
  >
    <use href={`#${name}--${resolution}`} xlinkHref={`#${name}--${resolution}`} />
  </svg>
);

Icon.propTypes = {
  /**
   * Override the default to hide icon from screen readers
   */
  ariaHidden: PropTypes.bool,

  /**
   * @ignore
   */
  ariaLabel: PropTypes.string,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Name of the icon e.g. help
   */
  name: PropTypes.string.isRequired,

  /**
   * Resolution of the icon e.g. help
   */
  resolution: PropTypes.oneOf(['high', 'low', 'tiny']).isRequired,

  /**
   * A11y role
   */
  role: PropTypes.string,

  /**
   * ViewBox size
   */
  viewBox: PropTypes.number
};

Icon.defaultProps = {
  ariaHidden: true,
  name: 'help',
  resolution: 'low'
};

export default Icon;
