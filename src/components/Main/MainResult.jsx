import React from "react";

export default function MainResult() {
  return (
    <div className="ContInp">
      <h2 class="Blind">결과 확인</h2>
      <p class="TxtWannabe">
        당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서
      </p>
      <p class="TxtTime">
        대략 <strong>1000</strong>일 이상 훈련하셔야 됩니다.
      </p>
      <button class="BtnGo" type="button">
        훈련하러가기 GO!GO!
      </button>
      <button class="BtnShare" type="button">
        공유하기
      </button>
    </div>
  );
}
