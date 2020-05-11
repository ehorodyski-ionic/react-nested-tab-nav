import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave, IonButton } from '@ionic/react';

const Sibling: React.FC = () => {

  useIonViewWillEnter(() => console.log('ionViewWillEnter: Sibling'));
  useIonViewWillLeave(() => console.log('ionViewWillLeave: Sibling'));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabs Sibling Root</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tabs Sibling Root</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/home/tabs">Go to Tabs</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Sibling;
