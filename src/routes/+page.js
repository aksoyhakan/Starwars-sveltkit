export const load= async ({fetch})=>{
    try {
        async function getStarWarsData(){
            const response= await fetch(" http://localhost:4000/starwars");
            const starwars=await response.json();
            return starwars;
        }
        return {
            starwars:getStarWarsData(),
        }
    } catch (error) {
        console.log(error);
    }
}
