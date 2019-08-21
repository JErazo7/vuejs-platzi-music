import platziMusicService from "./platzi-music";

const trackService = {};

trackService.search = q => {
  const type = "track";
  return platziMusicService
    .get("/search", {
      params: { q, type }
    })
    .then(res => res.data);
};

trackService.getById = async id => {
  return await platziMusicService.get(`/tracks/${id}`).then(res => res.data);
};

export default trackService;
