import { Dimensions, StyleSheet } from 'react-native'
import Colors from '../../theme/Colors'

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.secondaryLight,
    padding: 20,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    color: Colors.primaryText,
    textAlign: 'center',
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  price: {
    color: Colors.primaryText,
    fontWeight: 'bold',
    fontSize: 24,
  },
  quantityContainer: {
    backgroundColor: Colors.secondary,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    color: Colors.primaryText,
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
  descriptionTitle: {
    color: Colors.primaryText,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    color: Colors.secondaryText,
    fontSize: 20,
  },
})
