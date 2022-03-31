import { StyleSheet } from 'react-native'
import Colors from '../../theme/Colors'

export default StyleSheet.create({
  categoryList: {
    marginVertical: 20,
  },
  category: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  categoryText: {
    color: Colors.secondaryLight,
    fontWeight: 'bold',
    fontSize: 18,
  },
  activeCategory: {
    backgroundColor: Colors.primaryDark,
  },
})
