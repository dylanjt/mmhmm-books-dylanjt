import React from 'react'

interface TextAreaProps {
  value: string
  label?: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

const TextArea = ({ value, onChange, label }: TextAreaProps) => {
  return (
    <>
      {label && <label className="font-semibold">{label}</label>}
      <textarea
        className="w-full border border-gray-700 p-1 rounded-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default TextArea
