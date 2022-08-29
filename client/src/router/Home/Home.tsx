import React from "react";
import { Container, Grid } from "@mui/material";
import { useGetAllProductsQuery } from "../../redux/products/products.api";
import LoaderHOC from "../../components/LoaderHOC/LoaderHOC";
import ProductCardItem from "../../components/ProductCardItem/ProductCardItem";

const Home = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();

  console.log("products", products);

  return (
    <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ height: "100%", paddingTop: 5 }}
      >
        <LoaderHOC isLoading={isLoading}>
          <>
            {products?.map(({ title, description, price, image, _id }) => (
              <ProductCardItem
                id={_id}
                key={_id}
                title={title}
                description={description}
                price={price}
                image={image}
              />
            ))}
          </>
        </LoaderHOC>
      </Grid>
    </Container>
  );
};

export default Home;
