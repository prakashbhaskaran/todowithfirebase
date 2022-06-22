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
} from "firebase/firestore";

export const todoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("personal");
  const [title, setTitle] = useState("existing");
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    const queryCol = query(collection(db, "todos"));

    const unsub = onSnapshot(queryCol, (querySnapshot) => {
      let todoArray = [];
      querySnapshot.forEach((doc) => {
        todoArray.push({ ...doc.data(), id: doc.id });
      });
      setList(todoArray);
    });
    return () => unsub();
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
    if (
      text !== "" &&
      dateIsValid(date || `${new Date().toLocaleDateString()}`)
    ) {
      await addDoc(collection(db, "todos"), {
        content: text,
        completed: false,
        date: date || `${new Date().toLocaleDateString()}`,
        category: category,
      });
      setText("");
      setShowModal(false);
    }
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
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
