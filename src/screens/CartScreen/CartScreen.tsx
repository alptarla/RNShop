import React from 'react'
import { FlatList, ListRenderItem, Pressable, Text, View } from 'react-native'
import CartItem from '../../components/CartItem'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux'
import { removeProduct } from '../../store/slices/cartSlice'
import { Product } from '../../types'
import styles from './CartScreen.styles'

const CartScreen = () => {
  const { products } = useAppSelector((state) => state.cart)
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0)

  const dispatch = useAppDispatch()

  const handleRemoveItem = (id: number) => dispatch(removeProduct(id))

  const handlePayment = () => {
    // TODO: clear all items from cart and display a popup
  }

  const renderCartItem: ListRenderItem<Product> = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <CartItem
        product={item}
        onRemoveItem={handleRemoveItem}
      />
    </View>
  )

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        renderItem={renderCartItem}
      />
      <View style={styles.screenBottom}>
        <View>
          <Text style={styles.totalPriceTitle}>Total price</Text>
          <Text style={styles.totalPrice}>${totalPrice}</Text>
        </View>
        <Pressable
          style={styles.payButton}
          onPress={handlePayment}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CartScreen
