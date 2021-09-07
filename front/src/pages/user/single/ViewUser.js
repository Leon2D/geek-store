import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function ViewUser(id) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    axios({
      method: "post",
      url: "http://localhost:9080/login",
      data: {
        email: data.email,
        password: data.password,
      },
    }).then(
      (response) => {
        console.log("Logged");
      },
      (error) => {
        console.error(error);
        console.log("Not logged");
      }
    );
  return (
    <div className="App">
      <span></span>
    </div>
  );
}
