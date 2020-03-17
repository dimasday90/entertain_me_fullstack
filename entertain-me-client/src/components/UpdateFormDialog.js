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
import GET_ONE_MOVIE from "../queries/getOneMovie";
import GET_ONE_TV_SERIES from "../queries/getOneTvSeries";
import UPDATE_ONE_MOVIE from "../mutations/updateOneMovie";
import UPDATE_ONE_TV_SERIES from "../mutations/updateOneTvSeries";

export default function UpdateFormDialog({ data, type: dataType }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(dataType);
  const [title, setTitle] = useState(data.title);
  const [overview, setOverview] = useState(data.overview);
  const [posterPath, setPosterPath] = useState(data.poster_path);
  const [popularity, setPopularity] = useState(data.popularity);
  const [tags, setTags] = useState(data.tags);

  const [updateOneMovie] = useMutation(UPDATE_ONE_MOVIE, {
    refetchQueries: [
      {
        query: GET_ONE_MOVIE,
        variables: { _id: data._id }
      }
    ]
  });
  const [updateOneTvSeries] = useMutation(UPDATE_ONE_TV_SERIES, {
    refetchQueries: [
      {
        query: GET_ONE_TV_SERIES,
        variables: { _id: data._id }
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
      updateOneMovie({
        variables: {
          _id: data._id,
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
      updateOneTvSeries({
        variables: {
          _id: data._id,
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
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
