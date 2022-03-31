import React, { useEffect } from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from '../../components/ProductCard'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux'
import { getProducts } from '../../store/slices/productSlice'
import { Product } from '../../types'
import styles from './ProductListScreen.styles'

const ProductListScreen = () => {
  const { products, status, error } = useAppSelector((state) => state.product)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <View style={styles.productItemContainer}>
      <ProductCard product={item} />
    </View>
  )

  return (
    <SafeAreaView
      style={styles.screen}
      edges={['top', 'left', 'right']}
    >
      <FlatList
        data={products}
        renderItem={renderProductItem}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

export default ProductListScreen
