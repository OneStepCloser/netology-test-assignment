import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import classNames from 'classnames';

import styles from './App.module.scss';
import AppHeader from 'components/AppHeader/AppHeader';
import EmployeesTable from 'containers/EmployeesTable/EmployeesTable';
import { themeColor } from 'assets/styles/_colors.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeColor,
    },
  },
});

function App() {
  const contentClasses = classNames(styles.content, 'site-wide-paddings', 'mobile-no-paddings');

  return (
    <ThemeProvider theme={theme}>
      <div className={styles['app-root']}>
        <AppHeader/>
        <div className={ contentClasses }>
          <div className={styles['content-card']}>
            <EmployeesTable className={styles['employees-table-outer']}/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
