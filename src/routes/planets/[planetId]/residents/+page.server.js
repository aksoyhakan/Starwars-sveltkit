export const load= async (serverLoadEvent)=>{
    const {parent}=serverLoadEvent;
    const {planetData}=await parent();

    return {
        planetData,
    }
}