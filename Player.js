class Player {
    constructor(){

    }
    getcount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount= data.val();
        })
        }
        updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
        }
       update(){
           var playerIndex = "player" + this.index;
           database.ref(playerIndex).set({ 
           name:this.name,
           distance:this.distance
           })
       }
       static getPlayerinfo(){
           var playerInfoRef = database.ref('player')
           playerInfoRef.on("value",(data)=> {
               allPlayer = data.val();
           })
           
       }
}