import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>
            <i style={{ color: "#FF9839" }}>Prince</i> Video Call
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              navigate("/history");
            }}
            style={{ fontSize: "1.3rem", color: "white" }}
          >
            <RestoreIcon />
            <p>History</p>
          </IconButton>
          <Button
            style={{ fontSize: "1.2rem", color: "white" }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>
            <div style={{ display: "flex", gap: "10px", marginTop: "0.8rem" }}>
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting: (Code/Name)"
                variant="outlined"
                sx={{
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <img srcSet="/logo3.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
