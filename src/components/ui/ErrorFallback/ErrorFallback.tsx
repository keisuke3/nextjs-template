import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback = ({ error }: FallbackProps) => {
  return <div>{error.message}</div>
}
