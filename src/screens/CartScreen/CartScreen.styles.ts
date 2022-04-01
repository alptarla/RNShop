import { StyleSheet } from 'react-native'
import Colors from '../../theme/Colors'

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  cartItemContainer: {
    marginVertical: 5,
  },
  screenBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.secondaryLight,
    padding: 20,
    borderRadius: 10,
  },
  totalPriceTitle: {
    color: Colors.secondaryText,
    fontSize: 18,
    marginBottom: 3,
  },
  totalPrice: {
    color: Colors.primaryText,
    fontWeight: 'bold',
    fontSize: 21,
  },
  payButton: {
    flex: 1,
    marginLeft: 50,
    backgroundColor: Colors.primaryDark,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: Colors.secondaryLight,
    fontWeight: 'bold',
    fontSize: 18,
  },
})
