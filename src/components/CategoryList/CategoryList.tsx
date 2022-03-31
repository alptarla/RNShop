import React, { useState } from 'react'
import { FlatList, ListRenderItem, Pressable, Text, View } from 'react-native'
import styles from './CategoryList.styles'

interface CategoryListProps {
  categories: string[]
  defaultSelected?: string
  onCategorySelect: (category: string) => void
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  defaultSelected = 'All',
  onCategorySelect,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultSelected)

  const handleCategorySelect = (category: string) => () => {
    setSelectedCategory(category)
    onCategorySelect(category)
  }

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
