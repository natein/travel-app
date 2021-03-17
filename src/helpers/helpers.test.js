import { getVideoId, sightGalleryDataAdapter } from "./index";

describe("Check helpers func", () => {
  test('check get video func works well', () => {
        const url = 'https://www.youtube.com/watch?v=56bWMAEvSdA';
        const result = getVideoId(url);
        expect(result).toEqual('56bWMAEvSdA');
    });

  test('check sight gallery func works well', () => {
        const data = [];
        const result = sightGalleryDataAdapter(data);
        expect(result).toMatchObject(data);
  });
});