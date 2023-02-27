import axios from "axios";
export const client = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

//   const getRequest = async (pageNumber, search) => {
//     try {
//       await client.get(`/?page=${pageNumber}&name=${search}`).then((resp) => {
//         setPost(resp.data);
//       });
//     } catch {}
//   };
