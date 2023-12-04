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
} from "@ionic/react";
import { personCircle, lockClosed, mailOutline, bus } from "ionicons/icons";
import { toast } from "../toast";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
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
    const res = await registerUser(email, password);
    if (res) {
        toast('Account created successfully! Please login...')
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
