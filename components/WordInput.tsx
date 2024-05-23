"use client"
import React, { useState } from "react"

const WordInput = () => {
  const [newWord, setNewWord] = useState("")

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    console.log("New word:", newWord)
    setNewWord("")
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Enter a new word"
          className="w-full max-w-lg px-4 py-3 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg focus:shadow-lg" // Adjusted padding and font size
          required
          minLength={3}
          maxLength={30}
        />
        <button
          type="submit"
          className="mt-4 px-4 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none transition hover:scale-105 mb-6 md:mb-0"
        >
          Add Word
        </button>
      </form>
    </section>
  )
}

export default WordInput
