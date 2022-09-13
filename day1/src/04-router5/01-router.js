import React from 'react';
import { Main } from './router/router';
import { Tarbar } from './components/Tarbar';
export default function App() {
  return (
    <div>
      <Main>
        <Tarbar></Tarbar>
      </Main>
    </div>
  );
}
