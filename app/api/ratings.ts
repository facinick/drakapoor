import axios from "axios";

const getRatings = async (placeId: string) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/details/v2?place_id=${placeId}&key=${apiKey}`;

  const response = await axios.get(url);
  const reviews = response.data.result.reviews;

  return reviews;
};

export default getRatings;