import React from "react";
import { Box, Container, Grid } from "@mui/material";
import AddUpdateProductForm from "../../components/AddUpdateProductForm/AddUpdateProductForm";
import { FormType } from "../../components/AddUpdateProductForm/AddUpdateProductForm.types";
// import { AddProductForm } from "./components/AddProductForm/AddProductForm";

const UpdateProduct = () => (
  <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100%" }}
    >
      <Box sx={{ maxWidth: 800, width: "100%" }} mt={20}>
        <AddUpdateProductForm type={FormType.Update} />
      </Box>
    </Grid>
  </Container>
);

export default UpdateProduct;
