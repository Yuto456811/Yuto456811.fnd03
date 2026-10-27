'use strict'

// 全質問データ
const questionsAll = [

  // 性格診断    各軸の最大点は12点
  {
    id: "q1",
    type: "personality",
    text: "目標に取り組むとき、どちらを大切にしますか？",
    options: [
      {
        label: "結果を出すことを最優先にする",
        value: "q1_winning",
        scores: {
          winning: 3
        }
      },
      {
        label: "結果も大切だが、これまでの方法や積み重ねも尊重する",
        value: "q1_balance",
        scores: {
          winning: 1,
          tradition: 1
        }
      },
      {
        label: "実績のある方法を着実に続ける",
        value: "q1_tradition",
        scores: {
          tradition: 3
        }
      }
    ]
  },

  {
    id: "q2",
    type: "personality",
    text: "グループで何かに取り組むときは？",
    options: [
      {
        label: "全員で結果を出すことを目指す",
        value: "q2_winning",
        scores: {
          winning: 3
        }
      },
      {
        label: "結果とメンバー同士の関係をどちらも大切にする",
        value: "q2_balance",
        scores: {
          winning: 1,
          community: 1
        }
      },
      {
        label: "メンバーとの一体感や協力を最も大切にする",
        value: "q2_community",
        scores: {
          community: 3
        }
      }
    ]
  },

  {
    id: "q3",
    type: "personality",
    text: "難しい課題を任されたら？",
    options: [
      {
        label: "成功する方法を考え、確実に結果を出したい",
        value: "q3_winning",
        scores: {
          winning: 3
        }
      },
      {
        label: "結果を意識しつつ、新しい方法も試す",
        value: "q3_balance",
        scores: {
          winning: 1,
          challenge: 1
        }
      },
      {
        label: "失敗を恐れず、新しい方法に挑戦する",
        value: "q3_challenge",
        scores: {
          challenge: 3
        }
      }
    ]
  },

  {
    id: "q4",
    type: "personality",
    text: "何かを評価するとき、どちらを重視しますか？",
    options: [
      {
        label: "どれだけ優れた結果を残しているか",
        value: "q4_winning",
        scores: {
          winning: 3
        }
      },
      {
        label: "結果と独自性の両方",
        value: "q4_balance",
        scores: {
          winning: 1,
          style: 1
        }
      },
      {
        label: "他とは違う、その人らしい魅力があるか",
        value: "q4_style",
        scores: {
          style: 3
        }
      }
    ]
  },

  {
    id: "q5",
    type: "personality",
    text: "所属するグループに魅力を感じるのは？",
    options: [
      {
        label: "長い歴史や受け継がれてきた文化がある",
        value: "q5_tradition",
        scores: {
          tradition: 3
        }
      },
      {
        label: "歴史を大切にしながら、仲間とのつながりも強い",
        value: "q5_balance",
        scores: {
          tradition: 1,
          community: 1
        }
      },
      {
        label: "メンバー同士の距離が近く、一体感がある",
        value: "q5_community",
        scores: {
          community: 3
        }
      }
    ]
  },

  {
    id: "q6",
    type: "personality",
    text: "昔から続いている方法について、どう考えますか？",
    options: [
      {
        label: "長く続いている方法には価値がある",
        value: "q6_tradition",
        scores: {
          tradition: 3
        }
      },
      {
        label: "良い部分を残しながら、新しい方法も取り入れる",
        value: "q6_balance",
        scores: {
          tradition: 1,
          challenge: 1
        }
      },
      {
        label: "今に合う新しい方法へ積極的に変える",
        value: "q6_challenge",
        scores: {
          challenge: 3
        }
      }
    ]
  },

  {
    id: "q7",
    type: "personality",
    text: "長く使うものを選ぶとしたら？",
    options: [
      {
        label: "昔から評価されている定番のもの",
        value: "q7_tradition",
        scores: {
          tradition: 3
        }
      },
      {
        label: "定番の良さと自分らしさを両方持つもの",
        value: "q7_balance",
        scores: {
          tradition: 1,
          style: 1
        }
      },
      {
        label: "他の人とは違う、独自性のあるもの",
        value: "q7_style",
        scores: {
          style: 3
        }
      }
    ]
  },

  {
    id: "q8",
    type: "personality",
    text: "新しいことへ挑戦するときは？",
    options: [
      {
        label: "仲間と相談し、みんなで進みたい",
        value: "q8_community",
        scores: {
          community: 3
        }
      },
      {
        label: "仲間と協力しながら、新しいことにも挑戦する",
        value: "q8_balance",
        scores: {
          community: 1,
          challenge: 1
        }
      },
      {
        label: "まず自分で挑戦し、行動しながら改善する",
        value: "q8_challenge",
        scores: {
          challenge: 3
        }
      }
    ]
  },

  {
    id: "q9",
    type: "personality",
    text: "グループの中で大切にしたいことは？",
    options: [
      {
        label: "メンバー全員がつながりを感じられること",
        value: "q9_community",
        scores: {
          community: 3
        }
      },
      {
        label: "仲間とのつながりと、一人ひとりの個性の両方",
        value: "q9_balance",
        scores: {
          community: 1,
          style: 1
        }
      },
      {
        label: "一人ひとりが自分らしさを発揮できること",
        value: "q9_style",
        scores: {
          style: 3
        }
      }
    ]
  },

  {
    id: "q10",
    type: "personality",
    text: "自分が成長するうえで大切なのは？",
    options: [
      {
        label: "経験したことのない課題に挑戦すること",
        value: "q10_challenge",
        scores: {
          challenge: 3
        }
      },
      {
        label: "新しい経験を通じて、自分の強みを見つけること",
        value: "q10_balance",
        scores: {
          challenge: 1,
          style: 1
        }
      },
      {
        label: "自分の強みや個性を深く伸ばすこと",
        value: "q10_style",
        scores: {
          style: 3
        }
      }
    ]
  },


  //サッカーへの詳しさ type:knowledge

  {
    id: "sq1",
    type: "knowledge",
    text: "普段サッカーをどれくらい見ますか？",
    options: [
      {
        label: "ほとんど見ない",
        value: "sq1_low",
        scores: {
          knowledge: 0
        }
      },
      {
        label: "日本代表戦や大きな大会は見る",
        value: "sq1_mid",
        scores: {
          knowledge: 2,
          japanese: 2
        }
      },
      {
        label: "国内または海外リーグを定期的に見る",
        value: "sq1_high",
        scores: {
          knowledge: 5
        }
      }
    ]
  },

  {
    id: "sq2",
    type: "knowledge",
    text: "サッカーのルールや戦い方については？",
    options: [
      {
        label: "ほとんど分からない",
        value: "sq2_low",
        scores: {
          knowledge: 0
        }
      },
      {
        label: "基本的なルールやポジションは分かる",
        value: "sq2_mid",
        scores: {
          knowledge: 2
        }
      },
      {
        label: "オフサイドやフォーメーション、戦術もある程度分かる",
        value: "sq2_high",
        scores: {
          knowledge: 5
        }
      }
    ]
  },

  // 応援の入口 type:support
  {
    id: "lq1",
    type: "support",
    text: "スポーツチームを応援するなら？",
    options: [
      {
        label: "世界トップレベルの選手や試合を楽しめるチーム",
        value: "lq1_global",
        scores: {
          global: 3
        }
      },
      {
        label: "自分の身近な地域を代表するチーム",
        value: "lq1_local",
        scores: {
          local: 3
        }
      },
      {
        label: "どちらにも同じくらい魅力を感じる",
        value: "lq1_mix",
        scores: {
          global: 1,
          local: 1
        }
      }
    ]
  },

  {
    id: "lq2",
    type: "support",
    text: "知らないチーム同士の試合を見るなら？",
    options: [
      {
        label: "世界的に有名な選手が多く所属しているチーム",
        value: "lq2_global",
        scores: {
          global: 3
        }
      },
      {
        label: "自分の住んでいる地域にゆかりのあるチーム",
        value: "lq2_local",
        scores: {
          local: 3
        }
      },
      {
        label: "日本人選手が活躍しているチーム",
        value: "lq2_japanese",
        scores: {
          japanese: 3
        }
      }
    ]
  }
];

//userのscore初期化
const userScores = {
  winning: 0,
  tradition: 0,
  community: 0,
  challenge: 0,
  style: 0,
  
  knowledge: 0,

  global: 0,
  local: 0,
  japanese: 0,
};


//各質問をDOMに表示
const renderQuestion = q => {

  //質問全体の箱
  const questionEl = document.createElement('div');  //divtag作成 html要素の中
  questionEl.className = 'question-block';                   //クラスネーム指定

  //質問文
  const titleEl = document.createElement('p');
  titleEl.className = 'title';
  titleEl.innerText = q.text;                    //textキーを参照してvalueをテキストに追加
  questionEl.append(titleEl);

  //選択肢
  for (let i = 0; i < q.options.length; i++) {  //q:質問全体の入ったオブジェクト  q.options は選択肢の配列 =>各ラジオボタン＋質問文
    const opt = q.options[i];              //opt は選択肢1つ分のデータ

    const labelEl = document.createElement('label');
    labelEl.className = 'option-label';

     // radioボタンを作成
    const inputEl = document.createElement('input');
    inputEl.type = 'radio';

    // 同じ質問では全てのradioボタンに同じnameを設定する=>同じnameを持つものの中から1つしか選べない
    inputEl.name = q.id;

    inputEl.value = opt.value;  // 選択肢を識別するvalue

    // 選択肢の文字を作成
    const textEl = document.createElement('span');  //span:インライン要素=>選択ボタン＋質問文
     textEl.innerText = opt.label;

    labelEl.append(inputEl);         // labelの中にradioボタンと文字を入れる
    labelEl.append(textEl); 

    questionEl.append(labelEl);      // 質問全体に選択肢を追加
  }
  return questionEl;   // 完成した質問を返す
}

// 質問の表示場所を取得
const questionsContainer = document.querySelector('#questions-container');

// 全質問を画面に表示
for (let i = 0; i < questionsAll.length; i++) {

  const questionEl = renderQuestion(questionsAll[i]);

  questionsContainer.append(questionEl);
}


// 「確定」ボタンがされたときの挙動
const diaBtn = document.querySelector("#dia-btn");
diaBtn.addEventListener("click", function () {

  //userScore初期化
  diaBtn.addEventListener("click", () => {
    userScores.winning = 0;
    userScores.tradition = 0;
    userScores.community = 0;
    userScores.challenge = 0;
    userScores.style = 0;

    userScores.knowledge = 0;

    userScores.global = 0;
    userScores.local = 0;
    userScores.japanese = 0;
  })

  for (let i = 0; i < questionsAll.length; i++) {
    const question = questionsAll[i];
    // 選択された選択肢取得
    const selected = getSelectedRadio(question);
    // 未回答チェック
    if (selected === null) {
      alert("全ての質問に回答してください");
      return;
    }
    // 選択された選択肢に対応する選択肢のオブジェクトを取得
    const selectedOption = getSelectedOption(question, selected);
    // 選択肢オブジェクトの中のscoresを取得
    const scores = selectedOption.scores;
    // 診断スコアを加算し算出
    addScores(scores);
  }
  // 計算結果
  console.log(userScores);

  //userscoreとチームのスコアの差異を比較することでbestclub選定
let bestClub = null;
let smallestDifference = 100; //差異は最大でも30程度
// clubsを1チームずつ確認
for (const Key in clubs) {
  const club = clubs[Key];    //clubには各チームのオブジェクトが入る
  // ユーザーとクラブの差を計算
  const difference = calculateDifference(userScores, club);
  if (difference < smallestDifference) {
    smallestDifference = difference;
    bestClub = club;
    console.log("おすすめチーム:", bestClub.name);
    console.log("差:", smallestDifference);
  }
}
console.log("おすすめチーム:", bestClub.name);
console.log("差:", smallestDifference);

  //localstrageにbestclubを保存
  localStorage.setItem(
    "bestClub",
    JSON.stringify(bestClub)
  );
  window.location.href = "result.html";  //結果ページへ移動
});

//選択された選択肢を取得
function getSelectedRadio(question) {
  const selected = document.querySelector(`input[name="${question.id}"]:checked`);
  //=> <input>要素（type="radio",name="q1",value="q1_challenge"）でname属性がq[i]のもので「checked(選択されているもの)」だけを探す 
  //=> 各質問の中からチェックされているものをとってくる
  return selected;
}

//対応する選択肢オブジェクトを取得
function getSelectedOption(question, selected) {
  let selectedOption = null;
  // 質問の選択肢を1つずつ比較して確認（jはプロパティの数）
  for (let j = 0; j < question.options.length; j++) {
    const option = question.options[j];
    // 一致した選択肢のオブジェクト全体を取得
    if (option.value === selected.value) {
      selectedOption = option;
      break;                  // 見つけたらループ終了
    }
  }
  return selectedOption;
}

//scoresだけを取り出してuserScores(５つの評価軸＋サッカーへの詳しさ３つ＋応援の入り口１つのごと)に加算していく
function addScores(scores) {

  if (scores.winning !== undefined) {
    userScores.winning = userScores.winning + scores.winning;
  }
  if (scores.tradition !== undefined) {
    userScores.tradition = userScores.tradition + scores.tradition;
  }
  if (scores.community !== undefined) {
    userScores.community = userScores.community + scores.community;
  }
  if (scores.challenge !== undefined) {
    userScores.challenge = userScores.challenge + scores.challenge;
  }
  if (scores.style !== undefined) {
    userScores.style = userScores.style + scores.style;
  }
  if (scores.knowledge !== undefined) {
    userScores.knowledge = userScores.knowledge + scores.knowledge;
  }
  if (scores.global !== undefined) {
    userScores.global = userScores.global + scores.global;
  }
  if (scores.local !== undefined) {
    userScores.local =  userScores.local + scores.local;
  }
  if (scores.japanese !== undefined) {
    userScores.japanese = userScores.japanese + scores.japanese;
  }
}

//性格診断とチームの設定したスコアの差 => チーム提案
function calculateDifference(userScore, club) {
  let difference = 0;

  difference += Math.abs(userScores.winning - club.winning);
  difference += Math.abs(userScores.tradition - club.tradition);
  difference += Math.abs(userScores.community - club.community);
  difference += Math.abs(userScores.challenge - club.challenge);
  difference += Math.abs(userScores.style - club.style);
  difference += Math.abs(userScores.knowledge - club.knowledge);
  difference += Math.abs(userScores.global - club.global);
  difference += Math.abs(userScores.local - club.local);
  difference += Math.abs(userScores.japanese - club.japanese);

  return difference;
}




