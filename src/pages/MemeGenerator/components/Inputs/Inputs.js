import "./Inputs.css";
import React from "react";

export default function Inputs() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    imageAlt: "",
  });

  const [memeImagesApiResponse, setMemeImagesApiResponse] = React.useState({});

  function handleClick() {
    const list = memeImagesApiResponse.data.memes;
    const { url, name } = list[Math.floor(Math.random() * list.length)];

    setMeme((previous) => ({
      ...previous,
      randomImage: url,
      imageAlt: name,
    }));
  }

  function handleTextUpdate(event) {
    const target = event.target;
    console.log("target", target);

    setMeme((previous) => ({
      ...previous,
      [target.name]: target.value,
    }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => setMemeImagesApiResponse(json));
  }, []);

  return (
    <>
      <section className="app-wrapper inputs">
        <input
          name="topText"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleTextUpdate}
        ></input>
        <input
          name="bottomText"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleTextUpdate}
        ></input>
        <button onClick={handleClick}>
          <span>Get a new meme image</span>
          <span className="material-icons">image</span>
        </button>
      </section>

      <div className="app-wrapper">
        <div className="inputs--meme-container">
          <img src={meme.randomImage} alt={meme.imageAlt}></img>
          <div className="inputs--meme-container--text--top">
            {meme.topText}
          </div>
          <div className="inputs--meme-container--text--bottom">
            {meme.bottomText}
          </div>
        </div>
      </div>
    </>
  );
}
