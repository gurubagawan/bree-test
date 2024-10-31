// CashAdvanceModal.js
import React, { useState } from 'react';

export default function CashAdvanceModal({ onClose, addTransaction }: { onClose: () => void, addTransaction: (amount: string)=>void }) {
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRequest = () => {
    addTransaction(amount);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <h3 className="text-xl font-bold mb-4">Request a Cash Advance</h3>
            <input
              type="number"
              max="350"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
            <button
              onClick={handleRequest}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Submit Request
            </button>
          </>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4">Request Submitted</h3>
            <p className="mb-4">You have requested ${amount}. It will be processed shortly.</p>
            <button
              onClick={onClose}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}