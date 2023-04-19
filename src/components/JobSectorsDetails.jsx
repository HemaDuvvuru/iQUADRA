import { Box, Typography } from "@mui/material";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { useState, useMemo } from "react";
import Modeldata from "./Modeldata.json";



const columns = [
  { field: 'id', headerName: 'ID', width: 70, headerClassName: 'header', cellClassName: 'cell', },
  { field: 'name', headerName: 'Name', width: 300, headerClassName: 'header', cellClassName: 'cell' },
];

export const JobSectorsDetails = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const rows = useMemo(() => Modeldata, []);

  const handleSelectionModelChange = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
  };

  return (
    <>
 
    <Box sx={{ height: 200, width: "50%", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h5" component="h5" sx={{ textAlign: "center", mt: 2, mb: 2, left: "12em" }}>
        Job Sectors
      </Typography>
      <DataGrid
        style={{ backgroundColor: "whitesmoke", width: "200%", height: 400, margin: "76px", top: "-50px", left: "15em" }}
        flexGrow={1}
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id}
        selectionModel={selectionModel}
        onSelectionModelChange={handleSelectionModelChange}
        checkboxSelection
      />
      <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
       
      </Typography>
    </Box>
   
    </>
  );
};

export default JobSectorsDetails;
