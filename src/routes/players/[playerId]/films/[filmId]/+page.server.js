export const load= async(serverLoadEvent)=>{
    const {fetch,params,parent}=serverLoadEvent;
    const {filmId}=params;
    const {playerData}=await parent();

    const response=await fetch(`https://swapi.dev/api/films/${filmId}/`);
    const filmData=await response.json();

    return {
        title:filmData.name,
        filmData,
        playerData
    }
}