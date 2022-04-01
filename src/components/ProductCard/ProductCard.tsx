import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Colors from '../../theme/Colors'
import { Product } from '../../types'
import styles from './ProductCard.styles'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  goToCartScreen: () => void
  hasCart?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  goToCartScreen,
  hasCart = false,
}) => {
  const handleAddToCart = () => onAddToCart(product)

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
      <Text style={styles.price}>${product.price}</Text>
      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {product.title}
      </Text>
      <Text style={styles.category}>{product.category}</Text>
      {hasCart ? (
        <Pressable
          style={[styles.cartButton, { backgroundColor: Colors.secondaryDark }]}
          onPress={goToCartScreen}
        >
          <Text style={styles.cartButtonText}>Go to cart</Text>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.cartButton, { backgroundColor: Colors.primaryDark }]}
          onPress={handleAddToCart}
        >
          <Text style={styles.cartButtonText}>Add to cart</Text>
        </Pressable>
      )}
    </View>
  )
}

export default ProductCard
