import 'react-native-url-polyfill';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native';

const supabaseUrl = 'https://dvdffpxgzwjxxmxpqewb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZGZmcHhnendqeHhteHBxZXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NDc5NzIsImV4cCI6MjA0NjMyMzk3Mn0.KBrhi0KasHA_JTka_hIl9YLYu-Xxs2eqBJlkcjmy8Ao';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Controle do estado do app para gerenciar o auto-refresh de sessão
AppState.addEventListener('change', (nextAppState) => {
  if (nextAppState === 'active') {
    supabase.auth.refreshSession().catch(console.error);
  }
});