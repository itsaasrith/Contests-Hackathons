import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import LeafletMap from "../components/LeafletMap";

const UserDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle className="ion-padding-left">Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 1</IonCardSubtitle>
                <IonCardTitle>Feature 1</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 2</IonCardSubtitle>
                <IonCardTitle>Feature 2</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 3</IonCardSubtitle>
                <IonCardTitle>Feature 3</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard color="light">
              <IonCardHeader>
                <IonCardSubtitle>Card 4</IonCardSubtitle>
                <IonCardTitle>Feature 4</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>This is the feature.</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid> */}
      <IonContent>
        <LeafletMap />
      </IonContent>
    </IonPage>
  );
};

export default UserDashboard;
