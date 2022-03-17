import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  loading?: boolean
  disabled?: boolean
}

const Button = ({ children, onClick, loading, disabled }: ButtonProps) => {
  return (
    <button
      className="bg-green-600 hover:bg-green-500 disabled:bg-green-200 text-white disabled:text-gray-100 disabled:cursor-not-allowed px-4 py-2 rounded"
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
