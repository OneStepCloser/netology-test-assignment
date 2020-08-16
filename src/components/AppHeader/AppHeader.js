import React from 'react'
import styles from './AppHeader.module.scss'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import classNames from 'classnames';

export default class AppHeader extends React.Component {
  render() {
    const rootClasses = classNames(styles['app-header-root'], 'site-wide-paddings')

    return (
      <div className={ rootClasses }>
        <SupervisedUserCircleIcon fontSize="large"/>
        <h1 className={ styles['header'] }>Список сотрудников</h1>
      </div>
    )
  }
}