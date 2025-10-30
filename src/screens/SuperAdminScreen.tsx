import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SuperAdminScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to SuperAdmin Department</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22 },
});
