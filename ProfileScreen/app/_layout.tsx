import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ratescreen from '@/components/RatePage/Rating';
import ProfileScreen from '@/components/Profile/Profile';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  return (
    <SafeAreaView>
      {/* <Ratescreen></Ratescreen> */}
      <ProfileScreen></ProfileScreen>
    </SafeAreaView>
  );
}
