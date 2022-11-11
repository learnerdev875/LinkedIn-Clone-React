import {useSelector} from 'react-redux'
import { selectUser } from './features/userSlice'

// Custom React Hook
export function useGetUser(){

    const user = useSelector(selectUser)
    return user
}
