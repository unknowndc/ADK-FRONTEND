import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClientDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Department Dashboard</Text>
      <Text style={styles.text}>Welcome, Order Manager!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default ClientDashboard;
