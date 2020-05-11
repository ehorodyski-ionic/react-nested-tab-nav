import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Tabs from './Tabs';
import Sibling from './Sibling';

const Home: React.FC<RouteComponentProps> = ({ match }) => (
  <IonPage>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={`${match.url}/tabs`} component={Tabs} />
        <Route exact path={`${match.url}/tabs-sibling-root`} component={Sibling} />
        <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/tabs`} />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonPage>
);
export default Home;