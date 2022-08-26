import React, { useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import IProductCardItemProps from "./ProductCardItem.types";
import { useDeletePostMutation } from "../../redux/products/products.api";
import LoadingButton from "@mui/lab/LoadingButton";
import history from "../../router/history";
const base64templateString = "data:image/png;base64,";

export const ProductCardItem: React.FC<IProductCardItemProps> = ({
  image,
  title,
  description,
  price,
  id,
}) => {
  const [deleteCardItem, { isLoading, isSuccess }] = useDeletePostMutation();
  const convertBase64ToImg = `${base64templateString}${image.data}`;

  const onUpdateClick = useCallback(() => {
    history.push(`/update-product/${id}`);
  }, [id]);

  const onDeleteClick = useCallback(() => {
    deleteCardItem(id);
  }, [deleteCardItem, id]);

  return (
    <Card sx={{ maxWidth: 380, m: 3, width: "100%" }}>
      <CardHeader
        m={2} //margin
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ objectFit: "contain" }}
        image={convertBase64ToImg}
        alt="Paella dish"
      />
      <CardContent sx={{ mt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box
        m={2} //margin
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body1">price: {price}$</Typography>
        <Button size="large">Add to card</Button>
        <Button onClick={onUpdateClick} color={"secondary"}>
          Update
        </Button>
        <LoadingButton
          onClick={onDeleteClick}
          loading={isLoading}
          size={"small"}
          color={"error"}
        >
          Delete
        </LoadingButton>
      </Box>
    </Card>
  );
};

export default ProductCardItem;
