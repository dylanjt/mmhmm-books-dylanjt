interface InputProps {
  value: string
  label?: string
  onChange: (str: String) => void
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
