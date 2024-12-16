import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './modules/counter'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})
//获取getState的类型
type GetStateFnType = typeof store.getState
// 获取store.getState的返回值类型
type RootState = ReturnType<GetStateFnType>

type DispatchType = typeof store.dispatch

//函数的调用签名支持传入一个函数类型作为泛型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export default store
