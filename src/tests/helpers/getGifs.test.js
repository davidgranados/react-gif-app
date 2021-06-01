import getGifs from "../../helpers/getGifs";


describe('Tests on gitGifs helper', function () {
  it('should fetch 10 gifs', async () => {
    const gifs = await getGifs("marvel");
    console.log(gifs);
    console.log(gifs.length);
    expect(gifs).toHaveLength(10);
  });
  it('should fetch 0 gifs with no params', async () => {
    const gifs = await getGifs("");
    console.log(gifs);
    console.log(gifs.length);
    expect(gifs).toHaveLength(0);
  });
});
