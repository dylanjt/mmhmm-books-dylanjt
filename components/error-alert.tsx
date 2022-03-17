interface ErrorAlertProps {
  content: string
}

const ErrorAlert = ({ content }: ErrorAlertProps) => {
  return <div className="border border-red-500 bg-red-100 p-2">{content}</div>
}

export default ErrorAlert
