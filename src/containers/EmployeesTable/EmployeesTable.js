import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    this.state = { fetchingEmployees: true };
  }

  componentDidMount() {
    this.fetchEmployees()
      .then(() => {
        this.setState({ fetchingEmployees: false });
      })
  }

  render() {
    const fetchingEmployees = this.state.fetchingEmployees
    return (
      <>
      { fetchingEmployees &&
        <CircularProgress size={20} className={styles['circular-progress-outer']}/>
      }
      {
        !fetchingEmployees &&
        <Table stickyHeader={ true }>
          <TableHead className={ styles['table-head-outer'] }>
            <TableRow>
              { columns.map(col => <TableCell key={ col.key }>{ col.title }</TableCell>) }
            </TableRow>
          </TableHead>
          <TableBody>
            { this.props.employees.map((emp) => (
              <TableRow key={ emp.id }>
                <TableCell>{ emp.firstName }</TableCell>
                <TableCell>{ emp.lastName }</TableCell>
                <TableCell>{ emp.age }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
      </>
    )
  }

  fetchEmployees() {
    return store.dispatch(loadEmployees())
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