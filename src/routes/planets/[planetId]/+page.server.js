export const load= async (serverLoadEvent)=>{
    const {fetch,params}=serverLoadEvent;
    const {planetId}=params;
    console.log(planetId);

    const planetData= await (await fetch(`https://swapi.dev/api/planets/${planetId}/`)).json();

    return {
        title:`${planetData.name} Info`,
        planetData
    }
}