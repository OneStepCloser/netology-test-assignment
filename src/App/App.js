import React from 'react';
import styles from './App.module.scss'
import AppHeader from 'components/AppHeader/AppHeader';

function App() {
  return (
    <div className={styles['app-root']}>
      <AppHeader/>
      <div className={styles['content']}>
        <div className={styles['content-card']}>
          Hello world
        </div>
      </div>
    </div>
  );
}

export default App;
