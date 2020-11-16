//DATABASE-----------------------------------------------------------------------
// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"dbbaicao3la"
//   });
//   //check ket noi => node myfile.js
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
 //insert

 //------------------------------------------------------------------------------
//CARD DEFAULT
let arrCard = [
    { id: "1BICH", nameImg: "./PNG/AS.png", point: 1, pointType: 1 },
    { id: "1CHUON", nameImg: "./PNG/AC.png", point: 2, pointType: 1 },
    { id: "1RO", nameImg: "./PNG/AD.png", point: 3, pointType: 1 },
    { id: "1CO", nameImg: "./PNG/AH.png", point: 4, pointType: 1 },
    { id: "2BICH", nameImg: "./PNG/2S.png", point: 5, pointType: 2 },
    { id: "2CHUON", nameImg: "./PNG/2C.png", point: 6, pointType: 2 },
    { id: "2RO", nameImg: "./PNG/2D.png", point: 7, pointType: 2 },
    { id: "2CO", nameImg: "./PNG/2H.png", point: 8, pointType: 2 },
    { id: "3BICH", nameImg: "./PNG/3S.png", point: 9, pointType: 3 },
    { id: "3CHUON", nameImg: "./PNG/3C.png", point: 10, pointType: 3 },
    { id: "3RO", nameImg: "./PNG/3D.png", point: 11, pointType: 3 },
    { id: "3CO", nameImg: "./PNG/3H.png", point: 12, pointType: 3 },
    { id: "4BICH", nameImg: "./PNG/4S.png", point: 13, pointType: 4 },
    { id: "4CHUON", nameImg: "./PNG/4C.png", point: 14, pointType: 4 },
    { id: "4RO", nameImg: "./PNG/4D.png", point: 15, pointType: 4 },
    { id: "4CO", nameImg: "./PNG/4H.png", point: 16, pointType: 4 },
    { id: "5BICH", nameImg: "./PNG/5S.png", point: 17, pointType: 5 },
    { id: "5CHUON", nameImg: "./PNG/5C.png", point: 18, pointType: 5 },
    { id: "5RO", nameImg: "./PNG/5D.png", point: 19, pointType: 5 },
    { id: "5CO", nameImg: "./PNG/5H.png", point: 20, pointType: 5 },
    { id: "6BICH", nameImg: "./PNG/6S.png", point: 21, pointType: 6 },
    { id: "6CHUON", nameImg: "./PNG/6C.png", point: 22, pointType: 6 },
    { id: "6RO", nameImg: "./PNG/6D.png", point: 23, pointType: 6 },
    { id: "6CO", nameImg: "./PNG/6H.png", point: 24, pointType: 6 },
    { id: "7BICH", nameImg: "./PNG/7S.png", point: 25, pointType: 7 },
    { id: "7CHUON", nameImg: "./PNG/7C.png", point: 26, pointType: 7 },
    { id: "7RO", nameImg: "./PNG/7D.png", point: 27, pointType: 7 },
    { id: "7CO", nameImg: "./PNG/7H.png", point: 28, pointType: 7 },
    { id: "8BICH", nameImg: "./PNG/8S.png", point: 29, pointType: 8 },
    { id: "8CHUON", nameImg: "./PNG/8C.png", point: 30, pointType: 8 },
    { id: "8RO", nameImg: "./PNG/8D.png", point: 31, pointType: 8 },
    { id: "8CO", nameImg: "./PNG/8H.png", point: 32, pointType: 8 },
    { id: "9BICH", nameImg: "./PNG/9S.png", point: 33, pointType: 9 },
    { id: "9CHUON", nameImg: "./PNG/9C.png", point: 34, pointType: 9 },
    { id: "9RO", nameImg: "./PNG/9D.png", point: 35, pointType: 9 },
    { id: "9CO", nameImg: "./PNG/9H.png", point: 36, pointType: 9 },
    { id: "10BICH", nameImg: "./PNG/10S.png", point: 37, pointType: 10 },
    { id: "10CHUON", nameImg: "./PNG/10C.png", point: 38, pointType: 10 },
    { id: "10RO", nameImg: "./PNG/10D.png", point: 39, pointType: 10 },
    { id: "10CO", nameImg: "./PNG/10H.png", point: 40, pointType: 10 },
    { id: "11BICH", nameImg: "./PNG/JS.png", point: 41, pointType: 10 },
    { id: "11CHUON", nameImg: "./PNG/JC.png", point: 42, pointType: 10 },
    { id: "11RO", nameImg: "./PNG/JD.png", point: 43, pointType: 10 },
    { id: "11CO", nameImg: "./PNG/JH.png", point: 44, pointType: 10 },
    { id: "12BICH", nameImg: "./PNG/QS.png", point: 45, pointType: 10 },
    { id: "12CHUON", nameImg: "./PNG/QC.png", point: 46, pointType: 10 },
    { id: "12RO", nameImg: "./PNG/QD.png", point: 47, pointType: 10 },
    { id: "12CO", nameImg: "./PNG/QH.png", point: 48, pointType: 10 },
    { id: "13BICH", nameImg: "./PNG/KS.png", point: 49, pointType: 10 },
    { id: "13CHUON", nameImg: "./PNG/KC.png", point: 50, pointType: 10 },
    { id: "13RO", nameImg: "./PNG/KD.png", point: 51, pointType: 10 },
    { id: "13CO", nameImg: "./PNG/KH.png", point: 52, pointType: 10 },
  ];
  
  //VARIABLE GLOBAL ( BIẾN TOÀN CỤC )
  var nPlayer = parseInt(prompt("nhập số người chơi: "));
  var arrPlayers=[];
  var arrPlayerPointEqual=[];
  
  //QUERY ELEMENT ( TRUY VẤN ELEMENT )
    var mainGame=document.querySelector(".mainGame");
    var p1=document.querySelector(".p1");
  
  //--------------------------------------------------------------------------------
  //PROCESS ( QUÁ TRÌNH )
  //--------------------------------------------------------------------------------
  //FUNCTION RETURN NEW ARRAY RAMDOM INDEX || parameter(arr)=> newArrRandom
  function shuffleArray(array) {
    let shuffleArray = [...array];
    for (let i = shuffleArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray;
  }
  
  //distributionCard ( chia bài )
  function distributionCard() {
    var newCard = shuffleArray(arrCard);
    for(let i=0;i<nPlayer;i++){
      let playi=i+1;
      let namePlayer= prompt("nhập tên người chơi thứ: " + playi)
        let player={
            id: i,
            name:namePlayer,
            card1: newCard.slice(i,i+1),
            card2: newCard.slice(i+1,i+2),
            card3: newCard.slice(i+2,i+3),
        }
        //update newCard remove cardDis
        newCard=newCard.slice(i+3,52);
        //push player to arrPlayers
        arrPlayers.push(player);
    }
    loadElementCardPlayers()
    // return arrPlayers; // return list arrPlayer befor distributionCard
  }
  //return playerMax || param (player1 so sanh player[n])
  function findPlayerMax(playerMax,playerX){
      let pointPlayerMax=playerMax.card1[0].pointType+playerMax.card2[0].pointType+playerMax.card3[0].pointType;
      let pointPlayerX=playerX.card1[0].pointType+playerX.card2[0].pointType+playerX.card3[0].pointType;
      //if pointPlayerMax,pointPlayerX >=10 %
      if(pointPlayerMax>=10){
          pointPlayerMax=pointPlayerMax%10;
      }
      if(pointPlayerX>=10){
          pointPlayerX=pointPlayerX%10;
      }
      //so sanh
      if(pointPlayerX>pointPlayerMax){
        playerMax=playerX;
      }
      else if(pointPlayerX==pointPlayerMax){
        playerMax=playerMax;
        //push to arrPlayerPointEqual
        arrPlayerPointEqual.push(playerX)
      }
      else{
        playerMax=playerMax;
      }
      return playerMax;
  }
  //function openCard => return player win
  function playerWin(){
      debugger;
      let playerMax=arrPlayers[0];
      
      for(let i=1;i<arrPlayers.length;i++){
        playerMax=findPlayerMax(playerMax,arrPlayers[i])
      }
      //kiem tra arrPlayerPointEqual
      if(arrPlayerPointEqual.length>0){
        let playerMaxEqual=arrPlayerPointEqual[0];
        for(let i=1;i<arrPlayerPointEqual.length;i++){
            playerMaxEqual=findPlayerMax(playerMaxEqual,arrPlayerPointEqual[i])
        }
        if(playerMax.point>playerMaxEqual.point){
            return playerMax;
        }
        else {
            return playerMaxEqual;
        }
      }
      else {
          return playerMax;
    }
  }
  //func openCard
  function openCard(){
    //showElementCardAll
    showElementCardAll();
    setTimeout(alert(playerWin().name + " WIN!"), 10000);
  }
  //load Elenment
  function loadElementCardPlayers(){
      for(let i=0;i<arrPlayers.length;i++){
        let id=i+1;
        let div = document.createElement("div");
        div.setAttribute("class","player");
        div.setAttribute("id", "p"+id);
        div.textContent=arrPlayers[i].name;
        mainGame.appendChild(div);
        for(let j=1;j<=3;j++){
          let pi=document.querySelector("#p"+id);
          let div = document.createElement("div");
          div.setAttribute("class","card");
          div.setAttribute("id", "p"+id + "c"+j);
          pi.appendChild(div);
        }
      }
      
  }
  //showElementCardAll
  function showElementCardAll(){
    for(let i=0;i<arrPlayers.length;i++){
      let id=i+1;
      let pi = document.querySelector("#p"+id);
      for(let j=1;j<=3;j++){
        let idCardi=document.querySelector("#p"+id + "c"+j);
        let img =document.createElement("img");
        if(j==1){
          img.setAttribute("src",arrPlayers[i].card1[0].nameImg);
        }
        if(j==2){
          img.setAttribute("src",arrPlayers[i].card2[0].nameImg);
        }
        if(j==3){
          img.setAttribute("src",arrPlayers[i].card3[0].nameImg);
        }
        idCardi.appendChild(img);
      }
    }
  }
  //MAIN-------------------------------------------------------------------------------------------------------------

  //1.input n player

  //2.distributionCard to players
  distributionCard();
  
  //3. Open card => win , after click button(openCard)

  //4.insert DB

  //5.end . reload 
  