import CancelIcon from "@mui/icons-material/Cancel";
import FlagIcon from "@mui/icons-material/Flag";
import { Box, Button, Divider, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import MakeReport from "../NewReport/MakeReport";
// import app from "../../firebaseConfig";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ClaimInfo from "./ClaimInfo";
import classes from "./FinalDetails.module.css";
const StyledBox = styled(Box)`
  box-shadow: 5px 5px 1px rgb(0, 0, 0);
  border: 1px solid #000;
  margin-bottom: 2rem;
  width: 100%;
  min-height: 60px;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4375em;
  display: flex;
  word-wrap: break-word;
  align-items: flext-start;
  padding: 20px;
`;

const FinalDetails = ({ data, openDeatilsDialog, closeDetailsDialog }) => {
  const [openClaim, setOpenClaim] = useState(false);

  const handleClaimClose = () => {
    setOpenClaim(false);
  };
  const handleClaimOpen = (e) => {
    setOpenClaim(true);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            overflow: "auto",
            maxHeight: "80vh",
            width: "180%",
          }}
        >
          <Typography
            sx={{ textAlign: "center", mt: "3%" }}
            variant="subtitle1"
          >
            [Take a screenshot of the details and contact the person]{" "}
          </Typography>
          <div style={{ minWidth: "100%", padding: " 3%  10%" }}>
            <span style={{ letterSpacing: ".11ch", fontSize: "1rem" }}>
              Name of the person who found the lost item:
            </span>
            <StyledBox>
              <p>{data.name}</p>
            </StyledBox>

            <span style={{ letterSpacing: ".11ch", fontSize: "1rem" }}>
              Their SRN:
            </span>
            <StyledBox>
              <p>{data.srn.toUpperCase()}</p>
            </StyledBox>

            <span style={{ letterSpacing: ".11ch", fontSize: "1rem" }}>
              Class and Sec:
            </span>
            <StyledBox>
              <p>{data.classAndSec.toUpperCase()}</p>
            </StyledBox>

            <span style={{ letterSpacing: ".11ch", fontSize: "1rem" }}>
              Their Phone Number:
            </span>
            <StyledBox>
              {data.phone === "" && <p>Phone number not provided</p>}
              <p>{data.phone}</p>
              {/* {data.phone!='' && <p>{data.srn}</p>} */}
            </StyledBox>

            <span style={{ letterSpacing: ".11ch", fontSize: "1rem" }}>
              Additional means of reach them:
            </span>
            <StyledBox>
              {data.contactInfo === "" && (
                <p>No Additional details were provided by the user :(</p>
              )}
              <p>{data.contactInfo}</p>
            </StyledBox>

            <span style={{ letterSpacing: ".11ch", fontSize: "1rem" }}>
              It was found in:
            </span>
            <StyledBox>
              <p>{data.location}</p>
            </StyledBox>

            <span style={{ letterSpacing: ".11ch", fontSize: "1rem" }}>
              More details on the location:
            </span>
            <StyledBox sx={{}}>
              <p>{data.details}</p>
            </StyledBox>

            <Typography sx={{ paddingLeft: ".5rem", mb: "1rem" }} variant="h4">
              Claim Logs:
            </Typography>
            <StyledBox>
              {data.claimLogs.length === 0 && (
                <p
                  style={{
                    letterSpacing: ".11ch",
                    opacity: ".9",
                    fontSize: ".8rem",
                  }}
                >
                  No one has claimed this lost item yet
                </p>
              )}
              {data.claimLogs.length >= 1 && (
                <div>
                  {data.claimLogs.map((item, index) => (
                    <li
                      key={index}
                    >{` ${item.name} - ${item.srn} of ${item.classAndSec}`}</li>
                  ))}
                </div>
              )}
            </StyledBox>
            <Typography
              sx={{
                mt: "2rem",
                letterSpacing: ".15ch",
                textAlign: "center",
              }}
            >
              Make sure to meet the person inside campus or in a public place
              and stay safe
              <br /> (⁠ﾉ⁠◕⁠ヮ⁠◕⁠)⁠ﾉ⁠*⁠.⁠✧
            </Typography>
          </div>
        </Box>
        <Box
          className={classes.uploadContainer}
          sx={{
            width: "100%",

            height: "100%",
            // display: "flex",
            // flexDirection: "column",

            // justifyContent: "space-between",
          }}
        >
          <Box
            className={classes.uploads}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "20%",
            }}
          >
            <Box sx={{}}>
              <Box
                sx={{
                  margin: "15px",
                  padding: "5%",
                  borderRadius: "10px",
                  border: "2.5px solid ",
                }}
              >
                <img
                  src={data.imgUrl}
                  style={{
                    objectFit: "contain",
                    // margin: "5px",
                    // boxShadow: "10px 10px 1px rgb(0, 0, 0)",
                    // border: "2.5px solid #000 ",
                    maxHeight: "50vh",
                  }}
                  id="outputImage"
                  alt="user uploaded image"
                  width="100%"
                />
              </Box>
            </Box>
          </Box>
          <Box
            className={classes.button}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Button
              onClick={handleClaimOpen}
              // onClick={closeDialog}
              sx={{
                width: "70%",
                margin: "auto",
                // padding: "1.1em 0",
                fontSize: "1.5rem",
                color: "#000",
                backgroundColor: "#E5FFD1",
                border: "1px solid #000",
                // boxShadow: " 5px 5px  rgb(0,0,0)",
                borderRadius: "10px",

                "&:hover": {
                  boxShadow: " 5px 5px  rgb(0,0,0)",
                  backgroundColor: "#E5FFD1",

                  border: "2px solid #000",
                  //   border: "2px solid #000",
                },
                "&:active": {
                  backgroundColor: "#E5FFD1",

                  boxShadow: " none",
                  transform: "translate(5px ,5px)",
                  //   transform: "scale(.9)",
                  transition: "none",
                  border: "2px solid #000",
                },
              }}
              disableElevation
              size="large"
              variant="contained"
              endIcon={
                <FlagIcon
                  style={{
                    fontSize: "1.5em",
                  }}
                />
              }
            >
              CLAIM
            </Button>{" "} */}
            <Dialog
              open={openClaim}
              onClose={handleClaimClose}
              maxWidth={"lg"}
              fullWidth={true}
              style={{ overflow: "hidden", borderRadius: "20px" }}
            >
              <DialogTitle
                sx={{
                  m: 0,
                  px: "2rem",
                  fontSize: "2.5em",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Claim the item</span>
                <IconButton aria-label="close" onClick={handleClaimClose}>
                  <CancelIcon sx={{ color: "red", fontSize: "45px" }} />
                </IconButton>
              </DialogTitle>
              <Divider />
              <ClaimInfo
                data={data}
                closeDetailsDialog={closeDetailsDialog}
                closeClaimInfo={handleClaimClose}
              />
            </Dialog>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FinalDetails;
