import React, { useEffect, useState } from "react";
import { getImage, getWord } from "../utils/api";

const Home = () => {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState();
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    getWord(word).then((res) => {
      setWordData(res);
    });
    getImage(word).then((res) => {
      setImage(res);
      console.log(res, "<<< RES");
    });
  }, [word]);

  console.log(image, "IMAGE");

  return (
    <div className="input-area">
      <input placeholder="Search a word" type="text" onChange={handleChange} />
      <div>
        <p className="word">{wordData && wordData[0].word}</p>
        <p className="definition">
          - {wordData && wordData[0].meanings[0].definitions[0].definition}
        </p>
        {image && <img src={image} />}
      </div>
    </div>
  );
};

export default Home;
