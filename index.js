const names= ["Judy", "peter", "Joseph"];

const event = "birthday";


 function writeCards( names, event ) {
  let personalCard = []
  for ( let i = 0; i < names.length; i++ ) {
    personalCard.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return personalCard
}

function countDown(){
    let numCountdown=11;
    while(numCountdown--){
      console.log(numCountdown)
    }
  } 
