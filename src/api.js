import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID k3CZIpbZG-GtwnSQW_nR6rQxIC0_RXJRlyYGng1mRMU",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
