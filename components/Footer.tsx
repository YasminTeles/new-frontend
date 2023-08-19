import { Link, Box } from "@mui/material"

function Footer() {
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="center"
    >
      <Link
        variant="body1"
        href="https://yasminteles.com"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
      >
        Designed & Built by Yasmin Teles
      </Link>
    </Box>
  )
}

export default Footer
