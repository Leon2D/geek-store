import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./login.css";
import { useMutation, useQueryClient } from "react-query";
import { LoginAPI } from "../../components/Api";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(LoginAPI);
  const onSubmit = async (data) => {
    await mutateAsync(data);
    queryClient.invalidateQueries("login");
  };
  return (
    <div className="App">
      <img src="https://www.decathlon.com.co/themes/decashop_v5/assets/img/logo-decathlon-blue.svg" />
      <h2>Welcome to React store</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {isLoading ? (
            "Please wait a few seconds"
          ) : (
            <input type="submit" value="Log in"/>
          )}
      </form>
    </div>
  );
}
