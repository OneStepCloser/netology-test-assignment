import React from 'react';
import styles from './App.module.scss';
import AppHeader from 'components/AppHeader/AppHeader';
import EmployeesTable from 'containers/EmployeesTable/EmployeesTable';

function App() {
  return (
    <div className={styles['app-root']}>
      <AppHeader/>
      <div className={styles['content']}>
        <div className={styles['content-card']}>
          <EmployeesTable className={styles['employees-table-outer']}/>
        </div>
      </div>
      <div className={styles['credits']}>
        Icons made by&nbsp;
        <a
          href="https://creativemarket.com/Becris"
          title="Becris"
        >
          Becris
        </a>
        &nbsp;from&nbsp;
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default App;
