import React from "react";
import { Container, Grid } from "@mui/material";
import { useGetAllProductsQuery } from "../../redux/products/products.api";
import LoaderHOC from "../../components/LoaderHOC/LoaderHOC";

const Home = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();

  return (
    <Container sx={{ height: "100vh" }} maxWidth={"sm"}>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ height: "100%", paddingTop: 5 }}
      >
        <LoaderHOC isLoading={isLoading}>
          <p>Text</p>
        </LoaderHOC>
      </Grid>
    </Container>
  );
};

export default Home;
