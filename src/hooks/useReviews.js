import { useState, useEffect } from "react";
import { projectFireStore } from "../config/Firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const useReviews = (accepted) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    let q;
    q = query(
      collection(projectFireStore, "reviews"),
      where("accepted", "==", accepted)
    );
    const unsub = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsub();
  }, [accepted]);

  return { docs };
};

export default useReviews;
