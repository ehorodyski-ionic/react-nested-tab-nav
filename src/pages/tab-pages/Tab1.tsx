import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave, IonButton } from '@ionic/react';

const Tab1: React.FC = () => {

  useIonViewWillEnter(() => console.log('ionViewWillEnter: Tab1'));
  useIonViewWillLeave(() => console.log('ionViewWillLeave: Tab1'));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/home/tabs-sibling-root">Visit the tab sibling root</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
