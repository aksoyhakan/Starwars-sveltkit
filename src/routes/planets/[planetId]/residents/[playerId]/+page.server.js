export const load= async(serverLoadEvent)=>{
    const {params,fetch}=serverLoadEvent;
    const {playerId}=params;

    const playerData= await (await fetch(`https://swapi.dev/api/people/${playerId}/`)).json();

    return {
        playerData,
    }
}