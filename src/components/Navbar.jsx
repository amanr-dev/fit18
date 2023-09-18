import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "41px", height: "41px", margin: "0 5px" }}
          />
          <span
            style={{ fontSize: "2rem", fontWeight: "700", color: "#ff2625" }}
          >
            Fit18
          </span>
        </Box>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#777",
            borderBottom: "3px solid #FF2625",
          }}
        >
          {" "}
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "#777" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;