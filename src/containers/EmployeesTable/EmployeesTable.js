import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import classNames from 'classnames';
import store, { loadEmployees } from 'store/store';
import styles from './EmployeesTable.module.scss';

const columns = [
  {
    title: 'Имя',
    key: 'firstName',
  },
  {
    title: 'Фамилия',
    key: 'lastName',
  },
  {
    title: 'Возраст',
    key: 'age',
  },
]

class EmployeesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingEmployees: true,
      selectedEmployees: new Set(),
      error: '',
    };
  }

  fetchEmployees() {
    return store.dispatch(loadEmployees())
  }

  handleEmployeeSelected(id, e) {
    const checked = e.target.checked

    this.setState((state) => {
      const newSelectedEmployees = new Set(state.selectedEmployees)

      checked ? newSelectedEmployees.add(id) : newSelectedEmployees.delete(id)

      return {
        ...state,
        selectedEmployees: newSelectedEmployees,
      }
    });
  }

  isEmployeeSelected(id) {
    return this.state.selectedEmployees.has(id)
  }

  getSelectedEmployees() {
    return this.props.employees
      .filter(emp => this.isEmployeeSelected(emp.id))
  }

  getSelectedEmployeesNames() {
    return this.getSelectedEmployees()
      .map(emp => emp.firstName)
      .join(', ')
  }

  areAllEmployeesSelected() {
    return this.props.employees.length === this.state.selectedEmployees.size
  }

  handleSelectAllEmployees(e) {
    const checked = e.target.checked

    this.setState((state, props) => {
      return {
        ...state,
        selectedEmployees: checked ? new Set(props.employees.map(emp => emp.id)) : new Set()
      }
    })
  }

  render() {
    const fetchingEmployees = this.state.fetchingEmployees
    const error = this.state.error
    const rootClasses = classNames(
      styles['employees-table-root'],
      { [this.props.className]: this.props.className },
    )

    return (
      <div className={ rootClasses }>
        { fetchingEmployees &&
          <CircularProgress size={20} className={styles['circular-progress-outer']}/>
        }
        {
          !fetchingEmployees && error &&
            <div className={ styles['error-container'] }>
              <ErrorOutlineIcon color="error"/>
              <span className={ styles['error-text'] }>{ error }</span>
            </div>
        }
        {
          !fetchingEmployees && !error &&
          <TableContainer>
            <Table>
              <TableHead className={ styles['table-head-outer'] }>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={ this.areAllEmployeesSelected() }
                      onChange={ (e) => this.handleSelectAllEmployees(e) }
                    />
                  </TableCell>
                  { columns.map(col => <TableCell key={ col.key }>{ col.title }</TableCell>) }
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  this.props.employees.map((emp) => {
                  const isSelected = this.isEmployeeSelected(emp.id)
                  return (
                    <TableRow
                      key={emp.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={(e) => this.handleEmployeeSelected(emp.id, e)}
                        />
                      </TableCell>
                      <TableCell>{emp.firstName}</TableCell>
                      <TableCell>{emp.lastName}</TableCell>
                      <TableCell>{emp.age}</TableCell>
                    </TableRow>
                  )
                  })
                }
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Пользователи: { this.getSelectedEmployeesNames() || 'Не выбрано' }</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        }
      </div>
    )
  }

  componentDidMount() {
    this.fetchEmployees()
      .then(() => {
        this.setState({ fetchingEmployees: false });
      })
      .catch((error) => {
        this.setState({ fetchingEmployees: false, error: error.message });
      })
  }
};

const mapStateToProps = state => {
  return {
    employees: state.employees,
  }
}

export default connect(
  mapStateToProps,
)(EmployeesTable)