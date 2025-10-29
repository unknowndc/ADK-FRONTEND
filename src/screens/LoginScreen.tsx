import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const loadSavedLogin = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('user');
        if (savedUser) {
          Alert.alert('Auto Login', `Welcome back, ${savedUser}!`);
          setUsername(savedUser);
        }
      } catch (err) {
        console.error('Error loading saved login:', err);
      }
    };
    loadSavedLogin();
  }, []);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    const departments = ['order', 'delivery', 'accounts', 'client'];
    const user = username.toLowerCase();

    if (departments.includes(user)) {
      if (remember) {
        await AsyncStorage.setItem('user', username);
      } else {
        await AsyncStorage.removeItem('user');
      }
      Alert.alert('Success', `Welcome, ${username}!`);
    } else {
      Alert.alert('Error', 'Invalid department. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Department Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username (e.g. order)"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.rememberContainer}>
        <Text>Remember Me</Text>
        <Switch value={remember} onValueChange={setRemember} />
      </View>

      <Button title="Login" onPress={handleLogin} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});
