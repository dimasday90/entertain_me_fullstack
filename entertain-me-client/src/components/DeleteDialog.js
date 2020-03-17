import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import { useMutation } from "@apollo/react-hooks";
import ALL_MOVIES from "../queries/getMovies";
import ALL_TVSERIES from "../queries/getTvSeries";
import ADD_NEW_MOVIE from "../mutations/addMovie";
import ADD_NEW_TVSERIES from "../mutations/addTvSeries";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [popularity, setPopularity] = useState(0);
  const [tags, setTags] = useState([]);

  const [addNewMovie] = useMutation(ADD_NEW_MOVIE, {
    refetchQueries: [
      {
        query: ALL_MOVIES
      }
    ]
  });
  const [addNewTvSeries] = useMutation(ADD_NEW_TVSERIES, {
    refetchQueries: [
      {
        query: ALL_TVSERIES
      }
    ]
  });

  const tagItems = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Mystery",
    "Horror",
    "Animation",
    "Family",
    "Fantasy",
    "Crime"
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = event => {
    event.preventDefault();
    if (type.toLowerCase() === "movies") {
      addNewMovie({
        variables: {
          input: {
            title,
            overview,
            poster_path: posterPath,
            popularity: parseFloat(popularity),
            tags
          }
        }
      });
    } else if (type.toLowerCase() === "tvseries") {
      addNewTvSeries({
        variables: {
          input: {
            title,
            overview,
            poster_path: posterPath,
            popularity: parseFloat(popularity),
            tags
          }
        }
      });
    }
    handleClose();
    setTitle("");
    setType("");
    setOverview("");
    setPosterPath("");
    setPopularity(0);
    setTags([]);
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
        <DialogTitle id="form-dialog-title">Add Movie or Tv Series</DialogTitle>
        <DialogContent>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <FormControl className="form-control">
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                value={type}
                onChange={event => setType(event.target.value)}
              >
                <MenuItem value="" disable>
                  Select type
                </MenuItem>
                <MenuItem value="movies">Movies</MenuItem>
                <MenuItem value="tvseries">Tv Series</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="form-control">
              <TextField
                autoFocus
                id="title"
                label="Title"
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </FormControl>
            <FormControl className="form-control">
              <TextField
                autoFocus
                id="overview"
                label="Overview"
                type="text"
                size="medium"
                value={overview}
                onChange={event => setOverview(event.target.value)}
              />
            </FormControl>
            <FormControl className="form-control">
              <TextField
                autoFocus
                id="poster-path"
                label="Poster Path"
                type="text"
                value={posterPath}
                onChange={event => setPosterPath(event.target.value)}
              />
            </FormControl>
            <FormControl className="form-control">
              <TextField
                autoFocus
                id="popularity"
                label="Popularity"
                type="number"
                min={0}
                value={popularity}
                onChange={event => setPopularity(event.target.value)}
              />
            </FormControl>
            <FormControl className="form-control">
              <InputLabel id="tags-label">Tags</InputLabel>
              <Select
                labelId="tags-label"
                multiple
                value={tags}
                onChange={event => setTags(event.target.value)}
              >
                <MenuItem value="" disable>
                  Select tags
                </MenuItem>
                {tagItems.sort().map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitForm} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
