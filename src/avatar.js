import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  vdsAvatar,
  vdsAvatarCompanyLogo,
  vdsAvatarInitials,
  vdsAvatarLabel,
  vdsAvatarPhoto
} from './vds-avatar';

const classNames = ({ type, props }) => {
  const classes = [
    {
      active: type === 'photo',
      css: vdsAvatarPhoto
    }, {
      active: type === 'company-logo',
      css: vdsAvatarCompanyLogo
    }
  ];
  return classes.filter(c => c.active).map(c => c.css(props));
};

const Avatar = ({ className, href, icon, initials, label, src, type, ...props }) => {
  const Tag = href ? 'a' : 'div';

  const getType = (icon, initials, label, src, type) => {
    if (src) {
      return <img alt={label} css={classNames({ type, props })} src={src} />;
    }

    if (!src && type !== 'default') {
      return (
        <div css={classNames({ type, props })}>
          {React.cloneElement(icon, {
            ariaLabel: label
          })}
        </div>
      );
    }

    return (
      <React.Fragment>
        <div css={vdsAvatarLabel}>{label}</div>
        <div css={vdsAvatarInitials} aria-hidden="true" role="presentation">
          {initials}
        </div>
      </React.Fragment>
    );
  };

  return (
    <Tag css={vdsAvatar} className={className} href={href} {...props}>
      {getType(icon, initials, label, src, type)}
    </Tag>
  );
};

Avatar.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Link
   */
  href: PropTypes.string,

  /**
   * Icon
   */
  icon: PropTypes.element,

  /**
   * Initials
   */
  initials: PropTypes.string,

  /**
   * Label
   */
  label: PropTypes.string.isRequired,

  /**
   * Image src for photos/logos
   */
  src: PropTypes.string,

  /**
   * Type
   */
  type: PropTypes.oneOf(['default', 'photo', 'company-logo'])
};

Avatar.defaultProps = {
  icon: <Icon className="visa-ui-icon" name="avatar" resolution="low" role="img" />,
  type: 'default'
};

export default Avatar;
