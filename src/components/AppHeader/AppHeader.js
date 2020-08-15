import React from 'react'
import styles from './AppHeader.module.scss'

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className={styles['app-header-root']}>
        <img
          src={ require('assets/img/users.svg') }
          className={ styles['icon'] }
          alt="Logo"
        />
        <h1 className={ styles['header'] }>Список сотрудников</h1>
      </div>
    )
  }
}