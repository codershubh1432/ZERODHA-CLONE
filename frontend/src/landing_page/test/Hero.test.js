import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeHero from "../home/HomeHero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<HomeHero />);

    const heroImage = screen.getByAltText(/hero/i);
    expect(heroImage).toBeInTheDocument();
  });
});
