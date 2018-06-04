import React from 'react';

import DopeButtonImage from './DopeButtonImage';
import TouchableBounce from './TouchableBounce';

export default class BounceResizeButton extends React.PureComponent {
  render() {
    const { imageProps, children, ...props } = this.props;
    return (
      <TouchableBounce {...props}>
        <DopeButtonImage {...imageProps}>{children}</DopeButtonImage>
      </TouchableBounce>
    );
  }
}
