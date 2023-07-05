import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Artists } from "../../../hooks/useArtistSearch/Search.types";
import ArtistSearchResults from "../ArtistSearchResults";

describe("ArtistSearchResults", () => {
  const artists = {
    items: [
      { name: "Drake", id: "1" },
      { name: "Kanye West", id: "2" },
      { name: "Dave", id: "3" },
    ],
  } as Artists;
  const handleSelectArtist = jest.fn();
  
  it("should display a list of artist search results", () => {
    render(
      <ArtistSearchResults
        artists={artists}
        handleSelectArtist={handleSelectArtist}
      />
    );
    expect(screen.getByText("Drake")).toBeTruthy();
    expect(screen.getByText("Kanye West")).toBeTruthy();
    expect(screen.getByText("Dave")).toBeTruthy();
  });

  it("should call callback when button clicked", async () => {
    render(
      <ArtistSearchResults
        artists={artists}
        handleSelectArtist={handleSelectArtist}
      />
    );
    const drakeButton = screen.getByText("Drake");
    fireEvent.click(drakeButton);

    const kanyeWestButton = screen.getByText("Kanye West");
    fireEvent.click(kanyeWestButton);

    const daveButton = screen.getByText("Dave");
    fireEvent.click(daveButton);

    expect(handleSelectArtist).toHaveBeenCalledWith("1");
    expect(handleSelectArtist).toHaveBeenCalledWith("2");
    expect(handleSelectArtist).toHaveBeenCalledWith("3");
    expect(handleSelectArtist).toHaveBeenCalledTimes(3);
  });
});
