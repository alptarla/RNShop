import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItem, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from '../../components/CategoryList/CategoryList'
import ProductCard from '../../components/ProductCard'
import { DEFAULT_SELECTED_CATEGORY } from '../../constants'
import { useHomeStackNavigation } from '../../hooks/useTypedNavigation'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux'
import { getCategories } from '../../store/slices/categorySlice'
import { getProducts } from '../../store/slices/productSlice'
import { Product } from '../../types'
import styles from './ProductListScreen.styles'

const ProductListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    DEFAULT_SELECTED_CATEGORY
  )
  const { products, status, error } = useAppSelector((state) => state.product)
  const { categories } = useAppSelector((state) => state.category)

  const dispatch = useAppDispatch()
  const navigation = useHomeStackNavigation()

  useEffect(() => {
    if (selectedCategory !== DEFAULT_SELECTED_CATEGORY)
      // TODO: filter products by selected category
      dispatch(getProducts())
  }, [selectedCategory])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const goToDetailScreen = (product: Product) => () =>
    navigation.navigate('ProductDetailScreen', {
      productId: product.id,
      productTitle: product.title,
    })

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      onPress={goToDetailScreen(item)}
      style={styles.productItemContainer}
    >
      <ProductCard product={item} />
    </Pressable>
  )

  return (
    <SafeAreaView
      style={styles.screen}
      edges={['top', 'left', 'right']}
    >
      <CategoryList
        categories={['All', ...categories]}
        onCategorySelect={setSelectedCategory}
        defaultSelected={DEFAULT_SELECTED_CATEGORY}
      />
      <FlatList
        data={products}
        renderItem={renderProductItem}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

export default ProductListScreen
