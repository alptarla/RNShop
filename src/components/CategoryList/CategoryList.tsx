import React from 'react'
import { FlatList, ListRenderItem, Text, View } from 'react-native'
import styles from './CategoryList.styles'

interface CategoryListProps {
  categories: string[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const renderCategoryItem: ListRenderItem<string> = ({ item }) => (
    <View style={styles.category}>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  )

  return (
    <View style={styles.categoryList}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        horizontal
      />
    </View>
  )
}

export default CategoryList
