import { render, screen } from "@testing-library/react"

import Footer from "./Footer"

describe("<Footer />", () => {
  it("should render a Yasmin Teles link", () => {
    render(<Footer />)

    expect(screen.getByRole("link", { name: /Yasmin Teles/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Yasmin Teles/i })).toHaveAttribute("href", "https://yasminteles.com")
  })
})
