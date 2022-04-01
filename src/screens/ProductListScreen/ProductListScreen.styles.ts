import { StyleSheet } from 'react-native'
import Colors from '../../theme/Colors'

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 5,
  },
  productItemContainer: {
    flex: 1,
    margin: 10,
  },
  searchInput: {
    backgroundColor: Colors.secondaryLight,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    color: Colors.primaryText,
    borderWidth: 1,
    borderColor: Colors.secondaryDark,
  },
})
