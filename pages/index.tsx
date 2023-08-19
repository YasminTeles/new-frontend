import { Container, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Head from "next/head"

import Footer from "@components/Footer"

function Home() {
  return (
    <>
      <Head>
        <title>New Project</title>

        <meta name="description" content="Generated by create next app" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
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
