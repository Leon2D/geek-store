import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function NewUser() {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 80 })}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Name"
          {...register("lastName", { required: true, maxLength: 80 })}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <label>is Administrator user?</label>
        <input
          {...register("isAdmin", { required: true })}
          type="radio"
          value="True"
          default="True"
        />
        <input
          {...register("isAdmin", { required: true })}
          type="radio"
          value="False"
        />
        <label>Is active user?</label>
        <input
          {...register("isActivate", { required: true })}
          type="radio"
          value="True"
          default="True"
        />
        <input
          {...register("isActivate", { required: true })}
          type="radio"
          value="False"
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
