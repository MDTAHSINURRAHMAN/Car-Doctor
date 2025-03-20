"use client";
import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
export default function Register() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
        <p className="text-gray-500 text-center mb-6">Create your account</p>

        {/* Form */}
        <RegisterForm />

        {/* Login Redirect */}
        <p className="text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-semibold">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
