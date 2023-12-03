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
} from "@ionic/react";

const Dashboard: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="6">
          <IonCard color="light">
            <IonCardHeader>
              <IonCardSubtitle>Card 1</IonCardSubtitle>
              <IonCardTitle>Cute Card</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              This is a cute-looking card with a light color theme.
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="6">
          <IonCard color="light">
            <IonCardHeader>
              <IonCardSubtitle>Card 2</IonCardSubtitle>
              <IonCardTitle>Cute Card</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              This is another cute-looking card with a light color theme.
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6">
          <IonCard color="light">
            <IonCardHeader>
              <IonCardSubtitle>Card 3</IonCardSubtitle>
              <IonCardTitle>Cute Card</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Yet another cute-looking card with a light color theme.
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol size="6">
          <IonCard color="light">
            <IonCardHeader>
              <IonCardSubtitle>Card 4</IonCardSubtitle>
              <IonCardTitle>Cute Card</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              The last cute-looking card with a light color theme.
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Dashboard;
