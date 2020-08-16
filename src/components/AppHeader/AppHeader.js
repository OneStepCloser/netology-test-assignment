import React from 'react'
import styles from './AppHeader.module.scss'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className={styles['app-header-root']}>
        <SupervisedUserCircleIcon fontSize="large"/>
        <h1 className={ styles['header'] }>Список сотрудников</h1>
      </div>
    )
  }
}