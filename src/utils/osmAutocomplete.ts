import axios from 'axios';

let response: any;
export const myImplomentation = async (value: string) => {
  try {
    if (!value) return response ?? [];
    const { data } = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(
        value
      )}`
    );
    response = (
      data.features as {
        properties: { name: string; display_name: string };
        geometry: { coordinates: number[] };
      }[]
    ).map(
      ({ properties: { name, display_name }, geometry: { coordinates } }) => ({
        name,
        displayName: display_name,
        coordinates,
      })
    );
    return response ?? [];
  } catch (error) {}
};
