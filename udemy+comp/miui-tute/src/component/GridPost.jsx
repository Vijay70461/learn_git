import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  backgroundColor: "#454545",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "30px",
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item style={{ color: "white" }}>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item style={{ color: "white" }}>xs=8</Item>
        </Grid>
      </Grid>
      <Divider color="white" variant="middle" />
    </Box>
  );
}
