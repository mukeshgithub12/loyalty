import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import swal from 'sweetalert2';


const DataTbleRtl = () => {
    const [search, setSearch] = useState("");
    const [countries, setContries] = useState([]);
    const [filterTable, setFilterTable] = useState([]);
  
     const Deleteop = () => {
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })   
     }   
    const getContries = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setContries(response.data);
        setFilterTable(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const columns = [
        {
            name: "Action",
            selector: (row) => <><FiEdit className="curcer_pointer" onClick={() => alert(row.id)} /> <AiOutlineDelete className="curcer_pointer" onClick={Deleteop} /></>  
          },
      {
        name: "Date",
        selector: (row) => row.userId,
        sortable: true,
      },
      {
        name: "Sales Representative",
        selector: (row) => row.id,
        sortable: true,
      },
      {
        name: "State",
        selector: (row) => row.title,
        sortable: true,
      },
      {
        name: "City",
        selector: (row) => row.id,
        sortable: true,
      },
    ];
  
    useEffect(() => {
      getContries();
    }, []);
  
    useEffect(() => {
      const result = countries.filter((table) => {
        return table.title.toLowerCase().match(search.toLowerCase());
      });
      setFilterTable(result);
    }, [search]);
  
    return (
      <DataTable
        rdt_TableCell
        columns={columns}
        data={filterTable}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="70vh"
        paginationRowsPerPageOptions={[70, 100]}
        highlightOnHover
        subHeader
        striped
        subHeaderComponent={
          <input
            type="text"
            SlabsTable
            className="form-control form-control-sm w-25"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    );
}

export default DataTbleRtl
