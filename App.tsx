import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

function App() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  // Removed Superadmin (we’ll add secret access later)
  const departments = [
    { name: 'Order', color: '#28a745' },
    { name: 'Delivery', color: '#007bff' },
    { name: 'Accounts', color: '#ffc107' },
    { name: 'Client', color: '#ff6600' },
  ];

  const handleLogin = () => {
    if (!selectedDept) {
      Alert.alert('Missing Info', 'Please select a department first!');
      return;
    }
    Alert.alert('Login Successful', `Logging in as ${selectedDept} department`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Department Login</Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <Text style={styles.label}>Select Department:</Text>
        <View style={styles.deptContainer}>
          {departments.map((dept) => (
            <TouchableOpacity
              key={dept.name}
              style={[
                styles.deptButton,
                {
                  backgroundColor:
                    selectedDept === dept.name ? dept.color : '#e0e0e0',
                },
              ]}
              onPress={() => setSelectedDept(dept.name)}
            >
              <Text
                style={[
                  styles.deptText,
                  { color: selectedDept === dept.name ? '#fff' : '#333' },
                ]}
              >
                {dept.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loginBox: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  deptContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  deptButton: {
    width: '48%',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  deptText: {
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
