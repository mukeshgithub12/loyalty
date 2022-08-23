import React, { useMemo } from 'react'
import {useTable, useFilters} from 'react-table'
import MOCK_DATA from '../mydata/MOCK_DATA.json'
import { COLUMNS } from './columns'
import ColumnFilter from './ColumnFiltering'
const Table = () => {
  
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const defaultColumn = useMemo(() => {
      return{
          Filter: ColumnFilter
      }
  }, [])
  
  const {
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      footerGroups, 
      rows, 
      prepareRow
  } = useTable({
      columns,
      data,
      defaultColumn
  },
  useFilters
   )

return (
    <>
    
  <table {...getTableProps()} className="table table-striped table-bordered table-sm" id="table-to-xls">
      <thead>
          {
              headerGroups.map((headerGroup) =>{
                  return (<tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) =>{
                          return <th {...column.getHeaderProps()}>
                              {column.render('Header')}
                              <div>{column.canFilter ? column.render('Filter') : null}</div>
                              </th>
                      })}
                  </tr>)
              })
          }
          
      </thead>
      <tbody {...getTableBodyProps()}>
          {
              rows.map( row => {
                  prepareRow(row)
                  return(
                      <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          })}
                      </tr>
                  )
              })
          }
      </tbody>
      <tfoot>
          {
              footerGroups.map(footerGroups => {
                  return(
                      <tr {...footerGroups.getFooterGroupProps()}>
                          {
                              footerGroups.headers.map(column =>{
                                  return <th {...column.getFooterProps}>
                                      {
                                          column.render('Footer')
                                      }
                                  </th>
                              })
                          }
                      </tr>
                  )
              })
          }
      </tfoot>
  </table>
  </>
)
}

export default Table;
