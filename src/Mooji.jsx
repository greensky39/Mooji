import React, { useState } from "react";

function Mooji() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "돈까스 맛집",
  ]);
  const [heart, setHeart] = useState(0);

  const [clickTitle, setClickTitle] = useState(0);

  const [hearts, setHearts] = useState([0, 0, 0]);

  const [clickHearts, setClickHearts] = useState(0);

  function CountHeart() {
    setHearts(hearts + 1);
  }

  const [modal, setModal] = useState(false);
  function ModalWindow(props) {
    return (
      <>
        <h3>모달창 {props.title[props.clickTitle]}</h3>
        <div>날짜</div>
        <div>상세내용</div>
        <div>좋아요 {props.clickHearts}</div>
      </>
    );
  }
  function ModalBtn() {
    setModal(!modal);
  }

  const [input, setInput] = useState("");
  const [checkInput, setCheckInput] = useState(false);

  const changeInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
    console.log("input:", input);
  };

  const saveInput = () => {
    setCheckInput(!checkInput);
    title.push(input);
    console.log(input);
  };
  return (
    <>
      <div>
        <h3>React Practice</h3>
        <div>-------------</div>
        {/* <h3>{title[0]}</h3>
        <div onClick={CountHeart}>❤{heart}</div>
        <div>-------------</div>
        <h3>{title[1]}</h3>
        <div onClick={CountHeart}>❤{heart}</div>
        <div>-------------</div>
        <h3>{title[2]}</h3>
        <div onClick={CountHeart}>❤{heart}</div>
        <div>-------------</div> */}
        {modal === true ? (
          <ModalWindow
            title={title}
            clickTitle={clickTitle}
            clickHearts={clickHearts}
          />
        ) : null}
        <div className="addtitle">
          <div>{input}</div>
          <div className="publish">
            <input onChange={changeInput} />
            <button onClick={saveInput}>저장</button>
            {checkInput === true ? title : null}
          </div>
        </div>
        <button onClick={ModalBtn}>Modal Window</button>
        {/* {hearts === 0 ? null : hearts} */}

        {title.map((a, i) => {
          return (
            <>
              <h3 onClick={() => setClickTitle(i)}>{a}</h3>
              <div
                onClick={() => {
                  let heartsCopy = [...hearts];
                  heartsCopy[i]++;
                  setHearts(heartsCopy);
                }}
              >
                좋아요 {hearts === 0 ? null : hearts[i]}
              </div>
              <div>---------</div>
            </>
          );
        })}
      </div>
      <h3>input값 저장하기</h3>
      {/* <div>{input}</div> */}
      {/* <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input> */}

      <button>click</button>
    </>
  );
}

export default Mooji;
