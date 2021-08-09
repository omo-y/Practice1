export const Practice1 = () => {
  const onClickPractice1 = () => {
    alert("練習問題を実行");
  };
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice1}>練習問題１を実行</button>
    </div>
  );
};
