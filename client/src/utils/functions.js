// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme

import { useState, useEffect } from "react";
import Toastify from "./toast";

let updateContacts;

//! Bilgi Ekleme
export const AddUser = (info) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 
  //* JS objectini Json formatına dönüştürmek için :
  const raw = JSON.stringify({
    ...info,
    // username: info.username,
    // phoneNumber: info.phoneNumber,
    // gender: info.gender,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/contact/", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      updateContacts();
    })
    .catch((error) => console.log("error", error));
};

//! Bilgi Çağırma

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  const getContacts = () => {
    fetch("http://127.0.0.1:8000/api/contact/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContactList(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  updateContacts = getContacts;

  useEffect(() => {
    setIsLoading(true);

    getContacts();
  }, []);
  return { isLoading, contactList };
};

//! Bilgi silme
export const DeleteUser = (id) => {
  fetch(`http://127.0.0.1:8000/api/contact/${id}/`, { method: "DELETE" })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      updateContacts();
    })
    .catch((error) => console.log("error", error));

  Toastify("Kullanıcı bilgisi silindi");
};

//! Bilgi Değiştirme

export const EditUser = (info) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 
  const raw = JSON.stringify({
    ...info,
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/contact/" + info.id + '/', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      updateContacts();
    })
    .catch((error) => console.log("error", error));
};

