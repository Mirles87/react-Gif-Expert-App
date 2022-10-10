import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

console.log("a");

setTimeout(() => {
  console.log("b");
}, 10);

setTimeout(() => {
  console.log("c");
}, 0);

console.log("d");
