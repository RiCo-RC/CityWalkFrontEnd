import { StyleSheet } from 'react-native';

export const stylesSplashscreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    width: '0%',
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 16,
    color: '#333',
  },
});
