
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/system";

// Styled component for card
const Card = styled(Box)(({ theme, bgcolor }) => ({
  borderRadius: "12px",
  padding: "16px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  height: "120px",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  userSelect: "none",
  cursor: "pointer"
}));

const categories = [
  { name: "AI", gradient: ["#6A0DAD", "#8E44AD"], icon: "🧠" },
  { name: "Cyber", gradient: ["#FF8C00", "#FFA500"], icon: "🧑‍💻" },
  { name: "Software", gradient: ["#FF1493", "#FF69B4"], icon: "🖥️" }
];

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" margin="0 20px">
      <Box display="flex" flexDirection="column" alignItems="center" maxWidth="820px" >
        <Typography fontWeight="bold" fontSize="4rem">
          Title
        </Typography>

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis dolore saepe quis quae labore nulla ab
          pariatur totam. Blanditiis architecto ratione dolor at atque unde facilis porro eaque molestias.
        </Typography>


        <Box sx={{ width: '100%', marginTop: '5vh' }}>
          <Grid container spacing={2}>
            {categories.map((category) => (
              <Grid size={{ xs: 12, md: 4}}>
                <Card sx={{
                  background: `linear-gradient(to right, ${category.gradient[0]}, ${category.gradient[1]})`
                }}>
                  <Typography variant="h5" fontWeight="bold">
                    {category.name}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      position: "absolute",
                      bottom: "-10px",
                      right: "10px",
                      fontSize: "84px",
                      opacity: 0.2,
                    }}
                  >
                    {category.icon}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
