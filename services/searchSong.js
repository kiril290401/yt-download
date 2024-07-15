import axios from 'axios';

const api_pass = "AIzaSyDFqLyKC1zDC-vN2YPPY5O5sDkDGEB3_-o";

const searchSongs = async (search) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${api_pass}&type=video&q=${search}&fields=items(id/videoId,snippet/title,snippet/thumbnails/medium/url)`
    );
    return response.data.items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default searchSongs;
