import { Fragment } from 'react';
import Helmet from 'react-helmet';

const defaultTitle = 'Fandi';

const PageTitle = (props) => {
  const { title, children } = props;
  return (
    <Fragment>
      <Helmet title={title ? `Fandi | ${title}` : defaultTitle} />
      {children}
    </Fragment>
  );
};
export default PageTitle;
