import { useState } from "react";

export function useRegister() {
  const [name, setName] = useState<string>('');  
  const [history, setHistory] = useState<string>('');  
  const [pictureAddress, setPictureAddress] = useState<string>('');  
  const [message, setMessage] = useState<string>('');  

  function register() {

  }

  function formValidation() {

  }

  function cleanFormInputs() {

  }

  return {
    name,
    history,
    pictureAddress,
    setName,
    setHistory,
    setPictureAddress,
    register,
    message,
    setMessage,
  };
} 