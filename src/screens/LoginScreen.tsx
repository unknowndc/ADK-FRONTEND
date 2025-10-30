import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const users = {
  order: { username: 'order', password: '1234' },
  delivery: { username: 'delivery', password: '1234' },
  accounts: { username: 'accounts', password: '1234' },
  client: { username: 'client', password: '1234' },
  superadmin: { username: 'superadmin', password: '9999' },
} as const;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = Object.values(users).find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      Alert.alert('Login Failed', 'Invalid username or password');
      return;
    }

    switch (username) {
      case 'order':
        navigation.navigate('Order');
        break;
      case 'delivery':
        navigation.navigate('Delivery');
        break;
      case 'accounts':
        navigation.navigate('Accounts');
        break;
      case 'client':
        navigation.navigate('Client');
        break;
      case 'superadmin':
        navigation.navigate('SuperAdmin');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Department Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 10 },
  button: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});
