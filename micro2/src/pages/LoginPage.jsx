import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { db, auth,googleProvider } from "../utils/firebase";


export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = async (data) => {
    console.log({ data });
    await auth.signInWithEmailAndPassword(data.email, data.password);
    navigate("/peliculas");
  };

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/peliculas");
  };

  return (
    <div className="container">

        <h2>Ingresar</h2>
      <form id="addNewTransactionForm" onSubmit={handleSubmit(onSubmit)}>
        

        <label>
          <span>Email</span>
          <input
            {...register("email",{
            required:{value: true,
            message: "El campo es requerido"}
        ,
        pattern:{
            value:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
            message: "el formato no es correcto"}})}
            
        name="email"
            type="email"
            placeholder="Enter a email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <br />
        <br />

        <label>
          <span>Password</span>
          <input
            {...register("password",{required:{
                minLength:{value:6,message:"la contraseña es muy corta"}}})}
            name="password"
                type="password"
            placeholder="Enter a password"
            />
        </label>
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <br />

        <button type="button" onClick={handleLoginWithGoogle}>
          Login with google
        </button>
        <br />
        <br />

        <button type="submit" id="btnAddTransaction">
          Create account
        </button>
      </form>
    </div>
  );
}
