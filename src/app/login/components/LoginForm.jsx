"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await signIn("credentials", {
        redirect: false, // Prevents automatic redirect
        email,
        password,
        callbackUrl: "/", // Redirect after login
      });
      if (response.ok) {
        router.push("/");
        form.reset();
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid email or password");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white shadow-lg rounded-lg w-96 mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-gray-700 font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all"
      >
        Login
      </button>
    </form>
  );
}
