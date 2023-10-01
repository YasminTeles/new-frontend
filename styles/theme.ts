/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */

import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

let theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

theme = responsiveFontSizes(theme)

export { theme }
