import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const services = [
    { id: 1, name: 'Scan QR code', icon: 'qr-code-outline', screen: 'ScanQR' },
    { id: 2, name: 'Pay phone number', icon: 'phone-portrait-outline', screen: 'PayPhone' },
    { id: 3, name: 'Pay contacts', icon: 'people-outline', screen: 'PayContacts' },
    { id: 4, name: 'Bank transfer', icon: 'card-outline', screen: 'BankTransfer' },
    { id: 5, name: 'Check Balance', icon: 'wallet-outline', screen: 'CheckBalance' },
    { id: 6, name: 'Assistance', icon: 'headset-outline', screen: 'Assistance' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Banking Services</Text>

      <View style={styles.servicesGrid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceItem}
            onPress={() => navigation.navigate(service.screen)}
          >
            <Ionicons name={service.icon} size={32} color="#4169E1" />
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.assistantContainer}>
        <View style={styles.assistant}>
          <Ionicons name="headset" size={24} color="white" />
          <View>
            <Text style={styles.assistantTitle}>FinSee</Text>
            <Text style={styles.assistantSubtitle}>Always active</Text>
          </View>
          <Ionicons name="mic-outline" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4169E1',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    color: '#000',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  serviceItem: {
    width: '33.33%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    backgroundColor: '#F5F7FF',
    margin: 8,
    borderRadius: 12,
  },
  serviceText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#333',
  },
  assistantContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  assistant: {
    backgroundColor: '#8A2BE2',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 24,
    justifyContent: 'space-between',
  },
  assistantTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  assistantSubtitle: {
    color: 'white',
    opacity: 0.8,
  },
});

export default HomeScreen; 