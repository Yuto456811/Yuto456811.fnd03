'use strict';

//localStorageからbestClubを取得して、結果をHTMLへ入れるjsfile

// localStorageからおすすめチームを取得
const bestClub = JSON.parse(
  localStorage.getItem("bestClub")
);

// チーム画像
const clubImage = document.querySelector("#club-image");
clubImage.src = bestClub.image;
clubImage.alt = bestClub.name;

// チーム名
const clubName = document.querySelector("#club-name");
clubName.innerText = bestClub.name;

// リーグ
const clubLeague = document.querySelector("#club-league");
clubLeague.innerText = "リーグ：" + bestClub.league;

// チーム説明
const clubDescription = document.querySelector("#club-description");
clubDescription.innerText = "簡易説明：" + bestClub.description;

// 視聴方法
const clubWatch = document.querySelector("#club-watch");
clubWatch.innerText = "視聴方法：" + bestClub.watch;

// Instagram
const clubInstagram = document.querySelector("#club-instagram");
clubInstagram.href = bestClub.instagram;
