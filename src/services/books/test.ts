import { normalizeFetchVolumes } from "./index";
import { FetchVolumesParams } from "./types";

describe("books service", () => {
  it("should transform to strings the fields maxResults and startIndex", () => {
    const params: FetchVolumesParams = {
      query: "teste",
      maxResults: 10,
      startIndex: 11,
    };

    const normalizedParams = normalizeFetchVolumes(params);
    expect(normalizedParams).toEqual({
      q: "teste",
      maxResults: "10",
      startIndex: "11",
      printType: "books",
      langRestrict: "pt",
    });
  });

  it("should remove the fields maxResults and startIndex if them is empty", () => {
    const params: FetchVolumesParams = {
      query: "teste",
    };

    const normalizedParams = normalizeFetchVolumes(params);
    expect(normalizedParams).toEqual({
      q: "teste",
      printType: "books",
      langRestrict: "pt",
    });
  });
});