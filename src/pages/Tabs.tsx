import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './tab-pages/Tab1';
import Tab2 from './tab-pages/Tab2';
import Tab3 from './tab-pages/Tab3';


const Tabs: React.FC<RouteComponentProps> = ({ match }) => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path={`${match.url}/tab1`} component={Tab1} />
      <Route exact path={`${match.url}/tab2`} component={Tab2} />
      <Route exact path={`${match.url}/tab3`} component={Tab3} />
      <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/tab1`} />} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href={`${match.url}/tab1`}>
        <IonIcon icon={triangle} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href={`${match.url}/tab2`}>
        <IonIcon icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href={`${match.url}/tab3`}>
        <IonIcon icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
