import './App.css';
import './index.css'
import React from 'react';
import { DataProvider } from './components/dataQuiz';
import Start from './components/Start';
import Result from './components/result';
import Quiz from './components/Quiz';

function App() {
  return (
    <DataProvider>

      <Start/>

      <Quiz/>

      <Result/>

    </DataProvider>
  );
}

export default App;