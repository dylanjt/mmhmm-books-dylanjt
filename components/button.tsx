import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
