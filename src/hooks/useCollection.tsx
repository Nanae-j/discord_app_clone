'use client';

import { db } from '@/app/firebase';
import { useEffect, useState } from 'react';
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  Query,
} from 'firebase/firestore';

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        }),
      );
      setDocuments(channelsResults);
    });
  }, []);

  return { documents };
};

export default useCollection;
