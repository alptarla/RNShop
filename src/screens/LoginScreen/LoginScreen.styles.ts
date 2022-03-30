import { StyleSheet } from 'react-native'
import Colors from '../../theme/Colors'

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  screenContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.primaryText,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 24,
    color: Colors.primaryText,
  },
  form: {
    marginVertical: 40,
  },
  formInput: {
    backgroundColor: Colors.secondaryLight,
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    fontWeight: 'bold',
  },
  formSmText: {
    fontWeight: 'bold',
    marginLeft: 'auto',
    color: Colors.secondaryText,
  },
  formButton: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  formButtonText: {
    color: Colors.secondaryLight,
    fontWeight: 'bold',
    fontSize: 18,
  },
})
