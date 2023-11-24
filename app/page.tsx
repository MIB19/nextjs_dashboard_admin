"use client";
import Dashboard from "@/components/Dashboard/E-commerce";
import { store, persistor } from '../store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider>
  );
}
