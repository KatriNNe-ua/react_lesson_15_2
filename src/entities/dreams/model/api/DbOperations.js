import db from './../../../../shared/config/firebase-config'
//@/shared/config/firebase-config
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore/lite'

class DbOperations {
  constructor(name) {
    this.collectionRef = collection(db, name);
  }
    async getAllPaginated({ page = 1, perPage = 6, cursors = [] }) {
      let q;

      const realLimit = perPage + 1; // беремо на 1 більше

      if (page === 1) {
        q = query(this.collectionRef, orderBy("description"), limit(realLimit));
      } else {
        const cursor = cursors[page - 1];
        if (!cursor) throw new Error("Cursor not found");
        q = query(
          this.collectionRef,
          orderBy("description"),
          startAfter(cursor),
          limit(realLimit)
        );
      }

      const snapshot = await getDocs(q);
      const docs = snapshot.docs;

      const hasMore = docs.length > perPage;

      const data = docs
        .slice(0, perPage)
        .map((doc) => ({ id: doc.id, ...doc.data() }));
      const lastVisible = docs[docs.length - 1] || null;

      return { data, cursor: lastVisible, hasMore };
    }

  async getById(id) {
    const snap = await getDoc(doc(this.collectionRef, id));
    return { id: snap.id, ...snap.data() };
  }

  async add(data) {
    await addDoc(this.collectionRef, data);
    return true;
  }
  async update(id, data) {
    await updateDoc(doc(this.collectionRef, id), data);
    return true;
  }
  async delete(id) {
    await deleteDoc(doc(this.collectionRef, id));
    return true;
  }

}

export default DbOperations
