// headerやfooterなどの共通レイアウトを定義
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'

import { Top } from './Top'

export const TopPage = () => {
  return (
    <ErrorBoundary>
      <Top />
    </ErrorBoundary>
  )
}
