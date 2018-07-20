import React from 'react';

import Page from '../../components/common/page/page';
import META from '../../constants/meta';

const Error = (props) => (
  <Page {...META.error}>
    <p>404</p>
  </Page>
)

export default Error;
