import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const services = [
  { id: 1, name: 'Scan QR code', icon: 'qr-code-outline', screen: 'ScanQR' },
  { id: 2, name: 'Pay phone number', icon: 'phone-portrait-outline', screen: 'PayPhone' },
  { id: 3, name: 'Pay contacts', icon: 'people-outline', screen: 'PayContacts' },
  { id: 4, name: 'Bank transfer', icon: 'card-outline', screen: 'BankTransfer' },
  { id: 5, name: 'Check Balance', icon: 'wallet-outline', screen: 'CheckBalance' },
  { id: 6, name: 'Assistance', icon: 'headset-outline', screen: 'Assistance' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Banking Services</Text>

        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceItem}
              onPress={() => navigation.navigate(service.screen)}
            >
              <Ionicons name={service.icon} size={28} color="#4169E1" />
              <Text style={styles.serviceText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.assistantContainer}>
        <TouchableOpacity style={styles.assistant}>
          <Ionicons name="headset" size={24} color="white" />
          <View style={styles.assistantTextContainer}>
            <Text style={styles.assistantTitle}>FinSee</Text>
            <Text style={styles.assistantSubtitle}>Always active</Text>
          </View>
          <Ionicons name="mic-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    paddingTop: 48,
    backgroundColor: '#4169E1',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  serviceItem: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: '#F5F7FF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  assistantContainer: {
    padding: 16,
    paddingBottom: 76,
  },
  assistant: {
    backgroundColor: '#8A2BE2',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 24,
    gap: 12,
  },
  assistantTextContainer: {
    flex: 1,
  },
  assistantTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  assistantSubtitle: {
    color: 'white',
    opacity: 0.8,
    fontSize: 12,
  },
});
