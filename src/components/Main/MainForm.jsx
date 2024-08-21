import React from "react";

export default function MainForm() {
  return (
    <>
      <form className="ContInp">
        <p className="TxtWannabe">
          나는 <input type="text" placeholder="예&#41;프로그래밍" required />
          전문가가 될것이다.
        </p>
        <p>
          그래서 앞으로 매일 하루에{" "}
          <input type="number" placeholder="예&#41;5시간" required /> 시간씩
          훈련할 것이다.
        </p>
        <button className="BtnExc" type="submit">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
    </>
  );
}
