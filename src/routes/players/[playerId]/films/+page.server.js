export const load= async(serverLoadEvent)=>{
    const {parent}=serverLoadEvent;
    const {playerData}=await parent();
    console.log(playerData);

    return {
        title:`${playerData.name} Films`,
        playerData,
    }
}