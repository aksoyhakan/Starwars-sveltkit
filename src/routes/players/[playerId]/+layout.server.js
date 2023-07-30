export const load=async (serverLoadEvent)=>{
    const {fetch,params}=serverLoadEvent;
    const playerId=params.playerId;


    const response=await fetch(`https://swapi.dev/api/people/${playerId}/`);
    const playerData=await response.json();


    return {
        title:`${playerData.name} Info`,
        playerData,

    }
}