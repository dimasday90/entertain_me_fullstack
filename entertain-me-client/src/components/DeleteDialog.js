import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { useMutation } from "@apollo/react-hooks";
import ALL_DATA from "../queries/getAllData";
import DELETE_ONE_MOVIE from "../mutations/deleteOneMovie";
import DELETE_ONE_TV_SERIES from "../mutations/deleteOneTvSeries";
import { useHistory } from "react-router-dom";

export default function FormDialog({ data, type: dataType }) {
  const [open, setOpen] = useState(false);
  const [deleteOneMovie] = useMutation(DELETE_ONE_MOVIE, {
    refetchQueries: [
      {
        query: ALL_DATA
      }
    ]
  });
  const [deleteOneTvSeries] = useMutation(DELETE_ONE_TV_SERIES, {
    refetchQueries: [
      {
        query: ALL_DATA
      }
    ]
  });
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = event => {
    event.preventDefault();
    if (dataType.toLowerCase() === "movies") {
      deleteOneMovie({
        variables: {
          _id: data._id
        }
      });
    } else if (dataType.toLowerCase() === "tvseries") {
      deleteOneTvSeries({
        variables: {
          _id: data._id
        }
      });
    }
    handleClose();
    history.push("/");
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          DELETE {data.title} {dataType} ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteData} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
