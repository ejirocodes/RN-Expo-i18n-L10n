import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { zh, en, es } from './i18n/supportedLanguages';

i18n.fallbacks = true;
i18n.translations = { en, zh, es };
i18n.locale = Localization.locale;

export default function App() {
  const onPressLogin = () => {
    Alert.alert(`${i18n.t('signoutBtn')}`, `${i18n.t('signOutAlertMess')}`, [
      {
        text: `${i18n.t('signOutAlertTitle')}`,
        style: 'cancel',
      },
      {
        text: `${i18n.t('confirm')}`,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t('welcome')}</Text>
      <Pressable style={styles.button} onPress={onPressLogin}>
        <Text style={(styles.text, styles.buttonText)}>
          {i18n.t('signoutBtn')}
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0A1D37',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
