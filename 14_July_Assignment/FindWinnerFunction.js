const FindWinner=()=>{
    if(TicTacToeArray[0]===TicTacToeArray[1] && TicTacToeArray[0]===TicTacToeArray[2] && TicTacToeArray[0]){
      setWinMessage(TicTacToeArray[0]+" has won")
    }
    else if(TicTacToeArray[3]===TicTacToeArray[4] && TicTacToeArray[3]===TicTacToeArray[5] && TicTacToeArray[3]){
      setWinMessage(TicTacToeArray[3]+" has won")
    }
    else if(TicTacToeArray[6]===TicTacToeArray[7] && TicTacToeArray[6]===TicTacToeArray[8] && TicTacToeArray[6]){
      setWinMessage(TicTacToeArray[6]+" has won")
    }
    else if(TicTacToeArray[0]===TicTacToeArray[3] && TicTacToeArray[0]===TicTacToeArray[6] && TicTacToeArray[0]){
      setWinMessage(TicTacToeArray[0]+" has won")
    }
    else if(TicTacToeArray[1]===TicTacToeArray[4] && TicTacToeArray[1]===TicTacToeArray[7] && TicTacToeArray[1]){
      setWinMessage(TicTacToeArray[1]+" has won")
    }
    else if(TicTacToeArray[2]===TicTacToeArray[5] && TicTacToeArray[2]===TicTacToeArray[8] && TicTacToeArray[2]){
      setWinMessage(TicTacToeArray[2]+" has won")
    }
    else if(TicTacToeArray[2]===TicTacToeArray[4] && TicTacToeArray[2]===TicTacToeArray[6] && TicTacToeArray[2]){
      setWinMessage(TicTacToeArray[2]+" has won")
    }
    else if(TicTacToeArray[0]===TicTacToeArray[4] && TicTacToeArray[0]===TicTacToeArray[8] && TicTacToeArray[0]){
      setWinMessage(TicTacToeArray[0]+" has won")
    }
    else if((TicTacToeArray[0]!==TicTacToeArray[1] || TicTacToeArray[0]!==TicTacToeArray[2]) && TicTacToeArray[0]!=="" && TicTacToeArray[1]!=="" && TicTacToeArray[2]!==""){
      if((TicTacToeArray[3]!==TicTacToeArray[4] || TicTacToeArray[3]!==TicTacToeArray[5]) && TicTacToeArray[3]!=="" && TicTacToeArray[4]!=="" && TicTacToeArray[5]!==""){
        if((TicTacToeArray[6]!==TicTacToeArray[7] || TicTacToeArray[6]!==TicTacToeArray[8]) && TicTacToeArray[8]!=="" && TicTacToeArray[6]!=="" && TicTacToeArray[7]!==""){
          if((TicTacToeArray[0]!==TicTacToeArray[3] || TicTacToeArray[0]!==TicTacToeArray[6]) && TicTacToeArray[0]!=="" && TicTacToeArray[3]!=="" && TicTacToeArray[6]!==""){
            if((TicTacToeArray[1]!==TicTacToeArray[4] || TicTacToeArray[1]!==TicTacToeArray[7]) && TicTacToeArray[1]!=="" && TicTacToeArray[4]!=="" && TicTacToeArray[7]!==""){
              if((TicTacToeArray[2]!==TicTacToeArray[5] || TicTacToeArray[2]!==TicTacToeArray[8]) && TicTacToeArray[2]!=="" && TicTacToeArray[5]!=="" && TicTacToeArray[8]!==""){
                if((TicTacToeArray[2]!==TicTacToeArray[4] || TicTacToeArray[2]!==TicTacToeArray[6]) && TicTacToeArray[2]!=="" && TicTacToeArray[4]!=="" && TicTacToeArray[6]!==""){
                  if((TicTacToeArray[0]!==TicTacToeArray[4] || TicTacToeArray[0]!==TicTacToeArray[8]) && TicTacToeArray[0]!=="" && TicTacToeArray[4]!=="" && TicTacToeArray[8]!==""){
                    setWinMessage("Game Drawn")
                  }
                }
              }
            }
          }
        }
      }
    }
  
  }