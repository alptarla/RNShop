import { StyleSheet } from 'react-native'
import Colors from '../../theme/Colors'

export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.secondaryLight,
    borderRadius: 20,
    padding: 30,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.secondaryLight,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 21,
    marginVertical: 10,
    color: Colors.primaryText,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 5,
    color: Colors.primaryText,
  },
  category: {
    color: Colors.secondaryText,
  },
})
