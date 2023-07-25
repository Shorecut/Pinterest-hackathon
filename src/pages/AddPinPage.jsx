import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { usePinContext } from "../contexts/PinContext";

const defaultTheme = createTheme();

export default function AddFoodPage() {
  const { addPin } = usePinContext();
  const [formValue, setFormValue] = React.useState({
    title: "",

    image: "",
    category: "",
  });

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.image.trim() ||
      !formValue.category.trim()
    ) {
      return;
    }

    addPin(formValue);

    setFormValue({
      title: "",
      image: "",
      category: "",
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create New Pin
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              autoFocus
              value={formValue.title}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image"
              value={formValue.image}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={formValue.category}
                onChange={handleChange}
                label="Category"
                name="category"
              >
                <MenuItem value={"car"}>Cars</MenuItem>
                <MenuItem value={"animal"}>Animal</MenuItem>
                <MenuItem value={"anime"}>Anime</MenuItem>
                <MenuItem value={"videogame"}>VideoGames</MenuItem>
                <MenuItem value={"art"}>art</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
            >
              Add Pin
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
