import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#fff",
        width: "200px",
        height: "200px",
        cursor: "pointer",
        gap: "10px",
        borderBottomLeftRadius: "20px",
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#777"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;