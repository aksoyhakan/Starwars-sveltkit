export const load= async (serverLoadEvent)=>{
    const {fetch,params}=serverLoadEvent;
    const {planetId}=params;

    const planetData= await (await fetch(`https://swapi.dev/api/planets/${planetId}/`)).json();

    return {
        planetData
    }
}