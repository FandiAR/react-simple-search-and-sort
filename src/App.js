import { Switch, withRouter } from 'react-router-dom';
import { MainRoutes } from './routes/Routes';
import CustomPropsRoute from './routes/renderPath';

const App = () => {
  return (
    <div className="App">
      <Switch>
        {MainRoutes.map((route, key) => <CustomPropsRoute {...route} key={key} />)}
      </Switch>
    </div>
  );
};

export default withRouter(App);
