import React from "react";
import "./MainPage.css";
import Boss from "./Boss.png"

function MainPage() {
  return (
    <main id = {"HomeContainer"}>
      <div className = "round">      </div>
      <div className = "text">
        <h1>작전명</h1>
        <h1>미림털기</h1>
        <h2>지시 받은 물건들을 훔쳐라!</h2>  
        <img src = {Boss} className = "pho"></img>
        <button className = "startBtn"><a href="/how_to_use" className = "a">시작하기</a></button>
      </div>

    </main>
  );
}

export default MainPage;