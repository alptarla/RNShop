import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { useMainTabsNavigation } from '../../hooks/useTypedNavigation'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux'
import { addProduct } from '../../store/slices/cartSlice'
import { getProductById } from '../../store/slices/productSlice'
import Colors from '../../theme/Colors'
import { HomeStackParamList } from '../../types'
import styles from './ProductDetailScreen.styles'

const ProductDetailScreen = () => {
  const { selectedProduct: product, status } = useAppSelector(
    (state) => state.product
  )
  const { products: cartProducts } = useAppSelector((state) => state.cart)
  const hasCart = cartProducts.some((p) => p.id === product!.id)

  const {
    params: { productId },
  } = useRoute<RouteProp<HomeStackParamList, 'ProductDetailScreen'>>()
  const dispatch = useAppDispatch()
  const mainTabsNavigation = useMainTabsNavigation()

  useEffect(() => {
    dispatch(getProductById({ id: productId }))
  }, [productId])

  const handleAddToCart = () => dispatch(addProduct(product!))

  const goToCartScreen = () => mainTabsNavigation.navigate('CartScreen')

  if (status === 'loading' || !product)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator
          size="large"
          color={Colors.primary}
        />
      </View>
    )

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceAndQuantityContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <View style={styles.quantityContainer}>
            <Icon
              name="minus"
              size={18}
            />
            <Text style={styles.quantity}>1</Text>
            <Icon
              name="plus"
              size={18}
            />
          </View>
        </View>
        {hasCart ? (
          <Pressable
            onPress={goToCartScreen}
            style={[
              styles.cartButton,
              { backgroundColor: Colors.secondaryDark },
            ]}
          >
            <Text style={styles.cartButtonText}>Go to cart</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={handleAddToCart}
            style={[styles.cartButton, { backgroundColor: Colors.primaryDark }]}
          >
            <Text style={styles.cartButtonText}>Add to cart</Text>
          </Pressable>
        )}
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
    </View>
  )
}

export default ProductDetailScreen
