import React, { useState, useEffect } from "react";
import { db } from "./firebase";

import {
  collection,
  addDoc,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const todoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("personal");
  const [title, setTitle] = useState("All");
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const uid = user.uid;
        const queryCol = query(collection(db, uid));

        onSnapshot(queryCol, (querySnapshot) => {
          let todoArray = [];
          querySnapshot.forEach((doc) => {
            todoArray.push({ ...doc.data(), id: doc.id });
          });

          setList(todoArray);
        });
      } else {
        console.log("listing error");
      }
    });
  }, []);

  //date validation
  function dateIsValid(dateStr) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (dateStr.match(regex) === null) {
      return false;
    }

    const [day, month, year] = dateStr.split("/");

    const isoFormattedStr = `${year}-${month}-${day}`;

    const date = new Date(isoFormattedStr);

    const timestamp = date.getTime();

    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
      return false;
    }

    return date.toISOString().startsWith(isoFormattedStr);
  }

  const addToList = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    if (text !== "" && dateIsValid(date)) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          addDoc(collection(db, uid), {
            content: text,
            completed: false,
            date: date,
            category: category,
            createdAt: serverTimestamp(),
          });
          setText("");
          setShowModal(false);
        } else {
        }
      });
    }
  };

  const toggleComplete = (todo) => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const uid = user.uid;
        updateDoc(doc(db, uid, todo.id), { completed: !todo.completed });
      } else {
        console.log("not modified");
      }
    });
  };
  const handleDelete = (id) => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const uid = user.uid;
        deleteDoc(doc(db, uid, id));
      } else {
        console.log("not deleted");
      }
    });
  };

  const value = {
    addToList,
    list,
    text,
    setText,
    setCategory,
    setDate,
    toggleComplete,
    handleDelete,
    title,
    setTitle,
    setShowModal,
    showModal,
  };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoProvider;
