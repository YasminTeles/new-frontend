import { Container, Typography, Stack } from "@mui/material"
import Head from "next/head"

import Footer from "@components/Footer"

function Home() {
  return (
    <>
      <Head>
        <title>New Project</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container
        component="main"
        maxWidth="lg"
      >
        <Stack
          component="article"
          direction="column"
          alignItems="center"
          minHeight="90vh"
          padding="100px 0px"
        >
          <Typography
            variant="h2"
            gutterBottom
          >
            New Project
          </Typography>
        </Stack>
      </Container>

      <Footer />
    </>
  )
}

export default Home
