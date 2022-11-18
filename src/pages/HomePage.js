import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import { faker } from '@faker-js/faker';
import Logo  from '../components/logo/Logo'
import { AppOrderTimeline } from '../sections/@dashboard/app';
import HomeNav from '../components/nav-home/HomeNav';
import useResponsive from  '../hooks/useResponsive';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  const isDesktop = useResponsive('up', 'lg');
  return (
    <>
      <Helmet>
        <title> Home  </title>
      </Helmet>

      {isDesktop ? (
        <HomeNav />
      ):(
        <Logo/>
      )}

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Who we are?
              </Typography>

              <Typography marginBottom={10} sx={{ color: 'text.secondary' }}>
                Our mission is to give you full control over your food. 
                We are here to help you growing your own fruits and vegetables.
                Now you can choose to decide, plant, monitor and eat the products you grow.
              </Typography>

              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/illustrations/smartfarming.jpg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </StyledContent>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src="/assets/illustrations/manageplants.jpeg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Manage & Grow your food
              </Typography>

              <Typography marginBottom={10} sx={{ color: 'text.secondary' }}>
                Ready to establish a strong foundation for your body, take serious actions towards your health,
                and make the world a better place by living a sustainable life?
              </Typography>

              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>

        </Grid>

        <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Plant
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Buy our product and start planting seeds today
              </Typography>
              <Box
                component="img"
                src="/assets/illustrations/addcompany.png"
                sx={{ height: 260, mx: 'auto', my: { xs: 4, sm: 2 }}}
              />
              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Monitor
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Our app will give you updates, statistics and analytics
              </Typography>
              <Box
                component="img"
                src="/assets/illustrations/addcompany.png"
                sx={{ height: 260, mx: 'auto', my: { xs: 4, sm: 2 }}}
              />
              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Typography variant="h3" paragraph>
                Collect
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                When the time comes, enjoy fruits or vegetable you collect
              </Typography>
              <Box
                component="img"
                src="/assets/illustrations/addcompany.png"
                sx={{ height: 260, mx: 'auto', my: { xs: 4, sm: 2 }}}
              />
              <Button to="/register" size="large" variant="contained" component={RouterLink}>
                Get started
              </Button>
            </StyledContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
