/* eslint-disable no-unused-vars */
import * as React from 'react';

// export default 'SvgrURL';
// export const ReactComponent = 'div';

const SvgrMock = React.forwardRef((props, ref) => <span ref={ref} {...props} />);

export const ReactComponent = SvgrMock;
export default SvgrMock;
