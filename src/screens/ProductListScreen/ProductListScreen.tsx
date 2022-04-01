import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Pressable,
  View,
} from 'react-native'
import CategoryList from '../../components/CategoryList/CategoryList'
import ProductCard from '../../components/ProductCard'
import { DEFAULT_SELECTED_CATEGORY } from '../../constants'
import {
  useHomeStackNavigation,
  useMainTabsNavigation,
} from '../../hooks/useTypedNavigation'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux'
import { addProduct } from '../../store/slices/cartSlice'
import {
  getCategories,
  setSelectedCategory,
} from '../../store/slices/categorySlice'
import { getProducts } from '../../store/slices/productSlice'
import Colors from '../../theme/Colors'
import { Product } from '../../types'
import styles from './ProductListScreen.styles'

const ProductListScreen = () => {
  const { products, status } = useAppSelector((state) => state.product)
  const { categories, selectedCategory } = useAppSelector(
    (state) => state.category
  )
  const { products: cartProducts } = useAppSelector((state) => state.cart)

  const dispatch = useAppDispatch()
  const homeStackNavigation = useHomeStackNavigation()
  const mainTabsNavigation = useMainTabsNavigation()

  useEffect(() => {
    if (selectedCategory !== DEFAULT_SELECTED_CATEGORY) {
      dispatch(getProducts({ category: selectedCategory }))
      return
    }

    dispatch(getProducts({}))
  }, [selectedCategory])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const goToDetailScreen = (product: Product) => () =>
    homeStackNavigation.navigate('ProductDetailScreen', {
      productId: product.id,
      productTitle: product.title,
    })

  const goToCartScreen = () => mainTabsNavigation.navigate('CartScreen')

  const handleCategorySelect = (category: string) =>
    dispatch(setSelectedCategory(category))

  const handleAddToCart = (product: Product) => dispatch(addProduct(product))

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <Pressable
      onPress={goToDetailScreen(item)}
      style={styles.productItemContainer}
    >
      <ProductCard
        product={item}
        onAddToCart={handleAddToCart}
        goToCartScreen={goToCartScreen}
        hasCart={cartProducts.some((p) => p.id === item.id)}
      />
    </Pressable>
  )

  return (
    <View style={styles.screen}>
      <CategoryList
        categories={['All', ...categories]}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      {status === 'loading' ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator
            size="large"
            color={Colors.primary}
          />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderProductItem}
          numColumns={2}
        />
      )}
    </View>
  )
}

export default ProductListScreen
