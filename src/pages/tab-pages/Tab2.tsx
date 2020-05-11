import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave, IonButton } from '@ionic/react';

const Tab2: React.FC = () => {

  useIonViewWillEnter(() => console.log('ionViewWillEnter: Tab2'));
  useIonViewWillLeave(() => console.log('ionViewWillLeave: Tab2'));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/home/tabs-sibling-root">Visit the tab sibling root</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
