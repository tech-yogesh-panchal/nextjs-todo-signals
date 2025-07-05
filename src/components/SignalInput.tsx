// src/components/SignalInput.tsx
'use client';

import React from 'react';

type SignalInputProps = {
  label?: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SignalInput({
  label,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
}: SignalInputProps) {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="font-medium text-sm">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-black w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
