import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave, IonButton } from '@ionic/react';

const Landing: React.FC = () => {

  useIonViewWillEnter(() => console.log('ionViewWillEnter: Landing'));
  useIonViewWillLeave(() => console.log('ionViewWillLeave: Landing'));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Landing Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Landing Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/home">Visit Home</IonButton>
      </IonContent>
    </IonPage>
  );

};
export default Landing;