import React from 'react'
import { FlatList, ListRenderItem, Pressable, Text, View } from 'react-native'
import styles from './CategoryList.styles'

interface CategoryListProps {
  categories: string[]
  selectedCategory: string
  onCategorySelect: (category: string) => void
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  const handleCategorySelect = (category: string) => () =>
    onCategorySelect(category)

  const getCategoryItemStyles = (category: string) => [
    styles.category,
    category === selectedCategory && styles.activeCategory,
  ]

  const renderCategoryItem: ListRenderItem<string> = ({ item }) => (
    <Pressable
      onPress={handleCategorySelect(item)}
      style={getCategoryItemStyles(item)}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
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
