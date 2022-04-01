import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Colors from '../../theme/Colors'
import { Product } from '../../types'
import styles from './CartItem.styles'

interface CartItemProps {
  product: Product
  onRemoveItem: (id: number) => void
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemoveItem }) => {
  const handleRemoveItem = () => onRemoveItem(product.id)

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            {product.title}
          </Text>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
      <Pressable
        style={styles.removeButton}
        onPress={handleRemoveItem}
      >
        <Icon
          name="close"
          size={24}
          color={Colors.secondaryLight}
        />
      </Pressable>
    </View>
  )
}

export default CartItem
