"use client";
import { Typography, Rating, Box } from "@mui/material";
import { useParams } from "next/navigation";
import { products } from "@/app/tempData/tempArr";

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const Id = Array.isArray(id) ? id[0] : id;
  const product = products.find(
    (product) => product.id === Number.parseInt(Id)
  );

  return (
    <section className="flex w-screen bg-[#081c15] h-screen">
      <Box className="flex items-center p-0 min-h-screen">
        <Box className="flex w-full min-w-full">
          <img src={product?.url} alt={product?.name} className="w-full h-auto" />

          <Box className="w-full p-4 bg-[#0d1b2a]">
            <Typography variant="h4" className="text-cyan-50 mb-2">
              {product?.name}
            </Typography>
            <Typography variant="h6" className="text-cyan-300 mb-2">
              {product?.companyName}
            </Typography>
            <Typography variant="body1" className="text-cyan-400 mb-2">
              Released on: {product?.date.toDateString()}
            </Typography>
            <Typography variant="body1" className="text-cyan-400 mb-2">
              Rating:{" "}
              <Rating
                name="read-only"
                value={product?.rating}
                readOnly
                precision={0.5}
                sx={{ color: "gold" }}
              />
            </Typography>
            <Typography variant="body1" className="text-cyan-400 mb-2">
              Price: {product?.price}
            </Typography>
            <Typography variant="body1" className="text-cyan-300">
              {product?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
