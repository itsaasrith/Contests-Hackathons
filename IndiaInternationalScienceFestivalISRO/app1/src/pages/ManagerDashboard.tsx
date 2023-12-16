import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  query,
  setDoc,
  addDoc,
} from "firebase/firestore";
import db from "../firebaseConfig";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
// import { useAuth } from "./auth"; // Assume you have an authentication context

const ManagerDashboard: React.FC = () => {

  // const auth = useAuth();
  const [registrationRequests, setRegistrationRequests] = useState<
    {
      id: string;
      name: string;
      dob: string;
      email: string;
      role: string;
      status: string;
    }[]
  >([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "registration-requests"),
      (snapshot) => {
        const requests = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            dob: data.dob,
            email: data.email,
            role: data.role,
            status: data.status,
          };
        });
        setRegistrationRequests(requests);
      }
    );

    return () => unsubscribe();
  }, [db]);

  const handleApproval = async (requestId: string, name:string, dob: string, email: string, role: string) => {
    await updateDoc(doc(db, "registration-requests", requestId), {
        status: "Approved",
    });
    await addDoc(collection(db, 'user-data'), {
        name: name,
        dob: dob,
        email: email,
        role:role,
    })
  };

  const handleRejection = async (requestId:string) => {
    await updateDoc(doc(db, "registration-requests", requestId), {
      status: "Rejected",
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Pending Registrations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {registrationRequests.map((request) => (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{request.name}</IonCardTitle>
              <IonCardSubtitle>{request.email}</IonCardSubtitle>             
            </IonCardHeader>
            <IonCardContent>
              <li>Date of Birth: {request.dob}</li>
              <li>Status: {request.status}</li>
            </IonCardContent>
            <IonButton fill='solid' color={'success'} onClick={() => handleApproval(request.id, request.name, request.dob, request.email, request.role)}>Accept</IonButton>
            <IonButton fill="solid" color={'danger'} onClick={() => handleRejection(request.id)}>Reject</IonButton>
          </IonCard>
        ))}
      </IonContent>

    {/* <div className="ion-padding-top">
        {registrationRequests.map((request) => (
        <ul>
            <li key={request.id}>
                <p>Name: {request.name}</p>
                <p>Date of Birth: {request.dob}</p>
                <p>Email: {request.email}</p>
                <p>Status: {request.status}</p>
                <IonButton onClick={() => handleApproval(request.id, request.name, request.dob, request.email, request.role)}>Approve</IonButton>
                <IonButton onClick={() => handleRejection(request.id)}>Reject</IonButton>
            </li>
        </ul>
        ))}
        
    </div> */}
    </IonPage>
  );
};

export default ManagerDashboard;
