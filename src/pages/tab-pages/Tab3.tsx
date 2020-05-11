import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave, IonButton } from '@ionic/react';

const Tab3: React.FC = () => {

  useIonViewWillEnter(() => console.log('ionViewWillEnter: Tab3'));
  useIonViewWillLeave(() => console.log('ionViewWillLeave: Tab3'));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/home/tabs-sibling-root">Visit the tab sibling root</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
