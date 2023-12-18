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
  const [dobError, setDOBError] = useState('');
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState('');
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
    // if (res) {
    //   <IonToast message={"Details sent to manager for review..."} />
    // }
    setBusy(false)
  }

  const handleEmailChange = (e: CustomEvent) => {
    const value = e.detail.value!;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    setEmail(value);
  }
  const handleDOBChange = (e: CustomEvent) => {
    const value = e.detail.value!;
    const inputDate = new Date(value);
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate() - 1); // 100 years ago
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1); // Yesterday

    if (inputDate < minDate || inputDate > maxDate) {
      setDOBError('Please enter a valid date of birth');
    } else {
      setDOBError('');
    }
    setDOB(value);
  };
  const handlePasswordChange = (e: CustomEvent) => {
    const value = e.detail.value!;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    // At least one capital letter, one numeric value, one special character, and minimum length of 8 characters

    if (!passwordRegex.test(value)) {
      setPasswordError('Password must contain at least one uppercase letters, one numeric digit, one special character, and be at least 8 characters long');
    } else {
      setPasswordError('');
    }
    setPassword(value);
  };

  const handleConfirmPasswordChange = (e: CustomEvent) => {
    const value = e.detail.value!;
    if (value !== password) {
      setPasswordError('Hold up! These passwords don\'t sync.');
    } else {
      setPasswordError('');
    }
    setConfirmPassword(value);
  };


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
                onIonChange={handleDOBChange}
                required
              />
            </IonItem>
            {dobError && <p style={{ color: 'red' }}>{dobError}</p>}
            <IonItem lines="full">
              <IonIcon icon={mailOutline} slot="start" />
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={handleEmailChange}
                required
              />
            </IonItem>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

            <IonItem lines="full">
              <IonIcon icon={lockClosed} slot="start" />
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={handlePasswordChange}
                required
              />
            </IonItem>
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

            <IonItem lines="full">
              <IonIcon icon={lockClosed} slot="start" />
              <IonLabel position="floating">Confirm Password</IonLabel>
              <IonInput
                type="password"
                value={confirmPassword}
                onIonChange={handleConfirmPasswordChange}
                required
              />
            </IonItem>
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

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
function setEmailError(arg0: string) {
  throw new Error("Function not implemented.");
}

