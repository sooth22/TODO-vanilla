const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する
const createIncompleteList = (text) => {
  //todo-item生成
  const div = document.createElement("div");
  div.className = "todo-item";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromCompleteList(deleteButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //戻るボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //todo-itemの子要素に各要素を設定
    div.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromCompleteList(deleteButton.parentNode);
  });

  //todo-itemの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
