//Task 2

class Player{
    static TotalRuns = 0
    constructor(PlayerID, PlayerName, PlayerRuns, PlayerDateofBirth,PlayerShirtNumber){
    this.PlayerID = PlayerID;
    this.PlayerName = PlayerName;
    this.PlayerRuns = PlayerRuns;
    this.PlayerDateofBirth = PlayerDateofBirth;
    this.PlayerShirtNumber = PlayerShirtNumber;
    Player.TotalRuns = Player.TotalRuns + PlayerRuns;
    }
  
    DisplayInfo(){
      console.log(this.PlayerID);
      console.log(this.PlayerName);
      console.log(this.PlayerRuns);
      console.log(this.PlayerDateofBirth);
      console.log(this.PlayerShirtNumber);
    }
    GetRuns(){
      return this.PlayerRuns;
    }
    AddRuns(runs){
      this.PlayerRuns = this.PlayerRuns + runs;
      Player.TotalRuns = Player.TotalRuns + runs;
    }
    TotalRuns(){
      console.log(Player.TotalRuns);
    }
  }
  
  const player1 = new Player(1,"JBT", 10, "21-6-1998", 8)
  player1.DisplayInfo()
  console.log(player1.GetRuns())
  player1.AddRuns(30)
  console.log(player1.GetRuns())
  player1.TotalRuns()
  
  const player2 = new Player(2,"Zub", 25, "26-4-1999", 26)
  player2.DisplayInfo()
  console.log(player2.GetRuns())
  player2.TotalRuns()
  player2.AddRuns(10)
  player2.TotalRuns()
  console.log(player2.GetRuns())
  
  
  //PlayerID, PlayerName, PlayerRuns, PlayerDateofBirth,PlayerShirtNumber