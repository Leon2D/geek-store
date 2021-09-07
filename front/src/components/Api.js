import React from "react";
import axios from "axios";
import config from "../config.js";
import { QueryClient } from "react-query";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
/*API CONTAINER METHODS - USERS.*/
//GET USERS
export const getAllUsers = async () => {
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/users`,
  });
  if (!response.ok) {
    throw new Error("Something went wrong.");
  }
  return response.json();
};
export const getUserById = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/user/${id}`,
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
//CREATE NEW USERS
export const newUser = async ({ ...data }) => {
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/new-user`,
    data: {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin,
      isActivate: data.isActivate,
    },
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
//UPDATE USERS

export const updateUserById = async ({ id, ...data }) => {
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/update-user/${id}`,
    data: {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin,
      isActivate: data.isActivate,
    },
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
//REMOVE USERS
export const removeUserById = async (id) => {
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/delete-user/${id}`,
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

/*API CONTAINER METHODS - PRODUCTS.*/

//GET PRODUCTS
export const getAllProducts = async () => {
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/products`,
  });
  if (!response.ok) {
    throw new Error("Something went wrong.");
  }
  return response.json();
};
export const getProductById = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/product/${id}`,
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
//CREATE NEW PRODUCTS
export const newProduct = async ({ ...data }) => {
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/new-product`,
    data: {
      p_SKU: data.p_SKU,
      p_name: data.p_name,
      p_description: data.p_description,
      p_category: {
        categoryId: data.categoryId,
        categoryName: data.categoryName,
      },
      p_value: data.p_value,
      p_image: data.p_image,
      p_brand: data.p_brand,
      discounts: {
        is_discounted: data.is_discounted,
        discount_percent: data.discount_percent,
      },
    },
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
//UPDATE PRODUCTS

export const updateProductById = async ({ id, ...data }) => {
  const response = await axios({
    method: "post",
    url: `${process.env.NODEJS_API}/update-product/${id}`,
    data: {
      p_SKU: data.p_SKU,
      p_name: data.p_name,
      p_description: data.p_description,
      p_category: {
        categoryId: data.categoryId,
        categoryName: data.categoryName,
      },
      p_value: data.p_value,
      p_image: data.p_image,
      p_brand: data.p_brand,
      discounts: {
        is_discounted: data.is_discounted,
        discount_percent: data.discount_percent,
      },
    },
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
//REMOVE PRODUCTS
export const removeProductsById = async (id) => {
  const response = await axios({
    method: "post",
    url: `${config.backendAPI}/delete-product/${id}`,
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return true;
};

//LOGIN
export const LoginAPI = async ({ ...data }) => {
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_API}/login`,
    data: {
      email: data.email,
      password: data.password,
    },
  });
  if (response.status != 200) {
    throw new Error(response.json().message);
  }
  const setToken = () => QueryClient.setQueryData("token", response.data);
  console.log("Logged");
  debugger;
  <Redirect to="/products" />;
};
