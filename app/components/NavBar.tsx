"use client";
import { useState, useEffect } from "react";
import { CustomInput } from "./CustomInput";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import { MapCategories } from "./contents/mapCategories";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    // This ensures the drawer functionality is only active on the client
  }, []);
  return (
    <>
      <div className="flex h-[15vh] bg-[#081c15] border-b border-gray-200 w-full flex-col sm:flex-row">
        <div className="flex items-center justify-center w-full sm:w-[15%] border-b sm:border-r border-gray-200">
          <h1 className="text-white text-2xl sm:text-4xl font-bold">Anon</h1>
        </div>
        <div className="flex items-center justify-center w-full sm:w-[65%] px-2 sm:px-4">
          <CustomInput />
        </div>
        <div className="hidden sm:flex flex-col sm:w-[20%] border-t sm:border-l border-gray-200 mt-4 sm:mt-0">
          <div className="flex space-x-2 mb-2">
            <PersonIcon sx={{ color: "#52b788" }} />
            <FavoriteBorderIcon sx={{ color: "#52b788" }} />
            <RedeemIcon sx={{ color: "#52b788" }} />
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center justify-end px-4">
          <IconButton onClick={toggleDrawer} sx={{ color: "#52b788" }}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* MapCategories Div */}
      <div
        className="hidden sm:flex flex-row w-full border-t 
          justify-between
         border-gray-200 bg-[#081c15] px-4 py-2"
      >
        <MapCategories />
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#081c15",
            color: "#52b788",
          },
        }}
      >
        <div className="p-4 w-64 bg-[#081c15] text-white">
          {/* For mobile view */}
          <div className="flex flex-col">
            <div className="flex flex-col space-y-4">
              <MapCategories />
              <div className="flex justify-between mt-4">
                <PersonIcon sx={{ color: "#52b788" }} />
                <FavoriteBorderIcon sx={{ color: "#52b788" }} />
                <RedeemIcon sx={{ color: "#52b788" }} />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
