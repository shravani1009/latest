import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScanQRScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      {/* Add QR scanner implementation here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScanQRScreen; 