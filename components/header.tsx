import { ReactNode } from 'react'

interface HeaderProps {
  title: string
  extra: ReactNode
}

const Header = ({ title, extra }: HeaderProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-4xl font-bold">{title}</div>
      <div>{extra}</div>
    </div>
  )
}

export default Header
