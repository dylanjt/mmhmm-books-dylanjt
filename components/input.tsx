import React from 'react'

interface InputProps {
  value: string
  label?: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ value, onChange, label }: InputProps) => {
  return (
    <>
      {label && <label className="font-semibold">{label}</label>}
      <input
        className="w-full border border-gray-700 p-1 rounded-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default Input
