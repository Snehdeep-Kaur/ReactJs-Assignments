import React,{useState} from "react"
import Icon from "./Components/Icon"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {Button, Container, Card, CardBody, Row, Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

const TicTacToeArray = new Array(9).fill("")

const TicTacToeApp=()=>{

  let [isCross, setIsCross]=useState(true);
  let [winMessage, setWinMessage]=useState("");
  
  const PlayAgain=()=>{
    setIsCross(true)
    setWinMessage("")
    TicTacToeArray.fill("")
  }

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

  const SwitchPlayers=(index)=>{
    
    if(isCross?"Cross":"Circle"){
      setIsCross(!isCross)
    }
    else{
      setIsCross(isCross)
    }
  }

  const ChangeItem=(index)=>{
    if(winMessage){
      return toast("Game has already got over", {type: "success"})
    }
    if(TicTacToeArray[index]===""){
      TicTacToeArray[index]=isCross?"Cross":"Circle"
      setIsCross(!isCross)
    }
    else{
      return toast("Open you eyes dude where are you tapping", {type: "error"})
    }
    FindWinner()
  }

  return(
    <Container className="p-5">
      <Button className="button" onClick={SwitchPlayers}> Switch Players </Button>
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md={6} className="offset-md-3">
          {
            winMessage?(
              <div>
                <h1 className="text-center">
                  {winMessage}
                </h1>
                <Button className="button2" onClick={PlayAgain}> Play Again </Button>
              </div>
            ) : (
              <h1>
                {isCross? "Cross's Turn": "Circle's Turn"}
              </h1>
            )
          }
          <div className="grid">
            {TicTacToeArray.map((value, index)=>(
              <Card onClick={()=>ChangeItem(index)}>
                <CardBody className="box">
                  <Icon choice={TicTacToeArray[index]}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    
  )
}

export default TicTacToeApp