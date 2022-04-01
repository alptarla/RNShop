import { StyleSheet } from 'react-native'
import Colors from '../../theme/Colors'

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    backgroundColor: Colors.secondaryLight,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    color: Colors.primaryText,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  category: {
    color: Colors.secondaryText,
    marginBottom: 7,
  },
  price: {
    color: Colors.primaryText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: Colors.danger,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
