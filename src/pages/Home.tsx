import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Tabs from './Tabs';
import Sibling from './Sibling';

const Home: React.FC<RouteComponentProps> = ({ match }) => (
  <IonRouterOutlet>
    <Route path={`${match.url}/tabs`} component={Tabs} />
    <Route exact path={`${match.url}/tabs-sibling-root`} component={Sibling} />
    <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/tabs`} />} />
  </IonRouterOutlet>
);
export default Home;