import { redirect } from '@sveltejs/kit';

export const load= async (serverLoadEvent)=>{
        const {fetch,url,cookies}=serverLoadEvent;
        if(!cookies.get("username")){
            throw redirect(307, `/login?redirectTo=${url.pathname}`);
        }
        const page=url.searchParams?.get("page")||1;
        async function getPlanets(page){
            const response=await fetch(`https://swapi.dev/api/planets/?page=${page}`);
            const data=await response.json();
            return data;
        }

        return {
            planets:getPlanets(page),
            currentPage:page,
        }

}