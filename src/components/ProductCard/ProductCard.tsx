import React from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../../types'
import styles from './ProductCard.styles'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    </View>
  )
}

export default ProductCard
