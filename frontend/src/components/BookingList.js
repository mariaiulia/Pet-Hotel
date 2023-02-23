import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, selectedIdsLookupSelector } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [rows, setRows] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "arrivalTime", headerName: "Arrival time", width: 200 },
    { field: "departureTime", headerName: "Departure time", width: 200 },
    { field: "pets", headerName: "Number of pets", width: 200 },
    { field: "rooms", headerName: "Rooms", width: 200 },
    { field: "clientNotes", headerName: "Client Notes", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "delete",
      width: 75,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              const selectedIDs = new Set(selectionModel);
              console.log(selectedIDs, "selectedId");
              setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));

              selectedIDs.forEach((id) => {
                axios.delete("http://localhost:5000/api/v1/booking/" + id);
                console.log("deleted " + id);
              });
            }}
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/booking`).then((res) => {
      const bookings = res.data;
      setBookings(bookings);
      setRows(bookings);
    });
  }, []);

  const bookingsData = bookings?.map((obj) => ({ ...obj, key: obj.id }));

  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={rows}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        columns={columns}
        onSelectionModelChange={(ids) => {
          setSelectionModel(ids);
        }}
      />
    </div>
  );
};

export default BookingList;
