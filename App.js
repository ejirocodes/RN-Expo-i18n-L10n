import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
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
      <Text>{i18n.t('welcome')}</Text>
      <Button
        onPress={onPressLogin}
        title={i18n.t('signoutBtn')}
        color="#005792"
        accessibilityLabel={i18n.t('signoutBtn')}
      />
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
});
