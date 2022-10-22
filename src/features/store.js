import { configureStore } from '@reduxjs/toolkit'
import BasketManagement from './slice/BasketManagement'
export const store = configureStore({
  reducer:{
    Basket:BasketManagement
}
})