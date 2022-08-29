import React from "react";
import { Box, Container, Grid } from "@mui/material";
import AddUpdateProductForm from "../../components/AddUpdateProductForm/AddUpdateProductForm";
import { FormType } from "../../components/AddUpdateProductForm/AddUpdateProductForm.types";

const AddProduct = () => (
  <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100%" }}
    >
      <Box sx={{ maxWidth: 800, width: "100%" }} mt={20}>
        <AddUpdateProductForm type={FormType.Add} />
      </Box>
    </Grid>
  </Container>
);

export default AddProduct;
