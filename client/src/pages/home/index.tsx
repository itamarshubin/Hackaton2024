
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';

// Styled component for card
const CategoryCard = styled(Box)(_ => ({
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
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" margin="0 20px">
      <Box display="flex" flexDirection="column" alignItems="center" maxWidth="820px" >
        <Typography fontWeight="bold" fontSize="4rem">
          Hackathon 2025
        </Typography>

        <Typography>
        Choose one of the following thrilling missions and dive into an adventure that will challenge your skills and ignite your passion for problem-solving. Whether you’re a mastermind of AI, a cyber expert, or a software wizard, there’s a mission waiting for you. Are you ready to take on the challenge?
        </Typography>


        <Box sx={{ width: '100%', marginTop: '5vh' }}>
          <Grid container spacing={2}>
            {categories.map((category) => (
              <Grid size={{ xs: 12, md: 4}}>
                <CategoryCard sx={{
                  background: `linear-gradient(to right, ${category.gradient[0]}, ${category.gradient[1]})`
                }} onClick={() => {
                  navigate(category.name);
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
                </CategoryCard>
              </Grid>
            ))}
            <br/>
            <br/>
            <Grid size={{ xs: 12, md: 12}}>
              <CategoryCard sx={{
                background: `linear-gradient(to right,rgb(16, 61, 112),rgb(59, 98, 204))`
              }} onClick={() => {
                navigate('score');
              }}>
                <Typography variant="h5" fontWeight="bold">
                  Leader Board
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
                  🥇🥈🥉
                </Typography>
              </CategoryCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
