import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { employees } from 'assets/js/mocks';

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

export default class EmployeesTable extends React.Component {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            { columns.map(col => <TableCell key={col.key}>{ col.title }</TableCell>) }
          </TableRow>
        </TableHead>
        <TableBody>
          { employees.map((emp) => (
            <TableRow key={ emp.id }>
              <TableCell>{ emp.firstName }</TableCell>
              <TableCell>{ emp.lastName }</TableCell>
              <TableCell>{ emp.age }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
};