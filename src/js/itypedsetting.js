// iTyped
require("../../node_modules/ityped/dist/index")
ityped.init(document.querySelector("#ityped"), {
  strings: ["Hi there", "NULLCT", "Vim"], //表示させたい文字の設定 区切りはカンマ
  startDelay: 650, //アニメーション開始までの遅延、大きいほど遅れる
  typeSpeed: 150, //表示させるスピード、大きいほどゆっくり
  loop: true, //ループ
  backSpeed: 50, //戻るスピード
  backDelay: 500, //戻る時間指定
  showCursor: true, //カーソル表示
  cursorChar: "|", //カーソルとして表示するテキスト
  RandomSource: true,
});