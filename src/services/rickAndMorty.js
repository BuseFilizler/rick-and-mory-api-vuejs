import { getApi } from "../services/serviceHelper";
import { BASE_URL } from "../services/baseUrl";

const getApiCharacter = async (a) => {
  const url = `${BASE_URL}/character${a}`;
  const response = await fetch(url, getApi());
  const data = await response.json();
  //console.log(response);
  //const { results,info } = await response.json();
  //console.log(results);
  //return response.json();
  return data;
  // console.log(data);
};






export const ramService = {
  getApiCharacter,
};
