"use client"

import React, { useState, useEffect } from "react"

export function ReviewSection() {
  const [name, setName] = useState("")
  const [website, setWebsite] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [saveName, setSaveName] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // SSR-safe localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("reviewName")
      if (savedName) {
        setName(savedName)
        setSaveName(true)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      if (saveName) {
        localStorage.setItem("reviewName", name)
      } else {
        localStorage.removeItem("reviewName")
      }
    }
    console.log({ name, website, email, comment, saveName })
    setSubmitted(true)

    // Clear form except name if saved
    setWebsite("")
    setEmail("")
    setComment("")
  }

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Write a Comment</h2>

      {/* White textarea section for comment */}
      <div className="bg-white border border-gray-300 rounded-md mb-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment here..."
          className="w-full p-4 h-40 resize-none border-none focus:outline-none"
        />
      </div>

      {/* Thank You Message */}
      {submitted && (
        <div className="p-6 bg-green-100 text-green-800 rounded-md mb-4 max-w-md">
          Thank you for your comment!
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Website */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter your website"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Save My Name */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="saveName"
            checked={saveName}
            onChange={(e) => setSaveName(e.target.checked)}
            className="w-4 h-4 accent-blue-600"
          />
          <label htmlFor="saveName" className="text-sm text-gray-700">
            Save my name,email, and website in this browser for the next time I comment.


          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300"
        >
          Submit Comment
        </button>
      </form>
    </section>
  )
}
