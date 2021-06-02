import { useLocation } from 'react-router-dom'

const useTodoDetail = () => {
  const pathname = useLocation().pathname
  return pathname.substring(pathname.lastIndexOf('/') + 1)
}

export default useTodoDetail
