import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  item: {
    padding: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    
  },
  button: {
    paddingVertical: 16,
    marginTop: 16,
  },
});
