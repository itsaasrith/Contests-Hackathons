import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonCard,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonFooter,
  IonLoading,
  IonToast,
} from "@ionic/react";
import { personCircle, lockClosed, mailOutline, bus, text, personOutline, calendarOutline } from "ionicons/icons";
import { toast } from "../toast";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [name, setName] = useState("")
  const [dob, setDOB] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [busy, setBusy] = useState<boolean>(false)

  async function handleRegister() {
    setBusy(true)
    if (password !== confirmPassword) {
      toast("Passwords don't match");
    }
    if (email.trim() === "" || password.trim() === "") {
      toast("Email and password are required!");
    }
    const res = await registerUser(name, dob, email, password, 'user');
    if (res) {
      <IonToast message={"Details sent to manager for review..."} />
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message={'Please wait...'} duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonItem lines="full">
              <IonIcon icon={personOutline} slot="start" />
              <IonLabel position="floating">Name</IonLabel>
              <IonInput
                type='text'
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem lines="full">
              <IonIcon icon={calendarOutline} slot="start" />
              <IonLabel position="floating">Date of Birth</IonLabel>
              <IonInput
                type='date'
                value={dob}
                onIonChange={(e) => setDOB(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem lines="full">
              <IonIcon icon={mailOutline} slot="start" />
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem lines="full">
              <IonIcon icon={lockClosed} slot="start" />
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem lines="full">
              <IonIcon icon={lockClosed} slot="start" />
              <IonLabel position="floating">Confirm Password</IonLabel>
              <IonInput
                type="password"
                value={confirmPassword}
                onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                required
              />
            </IonItem>

            <IonButton expand="block" onClick={handleRegister}>
              Register
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <p
              style={{
                fontFamily: "inherit",
                textAlign: "left",
                fontSize: "1.25em",
              }}
            >
              Already have an account?
            </p>
            <IonButton routerLink="/" className="ion-text-center">
              Login
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
