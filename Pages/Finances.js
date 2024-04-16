'use client'
import React, { useState } from 'react';
import Layout from '../app/layout.js'

// Modal component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add Statement</h2>
        <p>Modal content goes here...</p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Close</button>
      </div>
    </div>
  );
};

export default function Finances() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <main className="bg-yellow-990 flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>Welcome to Bearly Financial, your friendly neighborhood Bear you can Bank on!</h1>
        </div>
        {/* Button to open modal */}
        <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Add Statement</button>
        {/* Render modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </Layout>
  );
}