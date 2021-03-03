import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    // alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    justifyContent:'space-between'
  },
  listItemText: {
    fontSize: 18,
    justifyContent:'space-between'
  }
});