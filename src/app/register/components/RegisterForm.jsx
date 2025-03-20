"use client";
import React from "react";
import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({ name, email, password });
        if (response?.error) {
            setMessage(response.error);
          } else {
            setMessage(`✅ Registration successful! User ID: ${response.insertedId}`);
            form.reset();
          }
    }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label className="block text-gray-700 font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-gray-700 font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-gray-700 font-medium">Password</label>
        <input
          type="password"
          name="password"
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
        Register
      </button>
    </form>
  );
}
