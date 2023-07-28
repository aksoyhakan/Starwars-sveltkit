export const load = async (serverLoadEvent) => {
    try {
        const { fetch } = serverLoadEvent;

        async function getData(section){
            const response = await fetch(`http://localhost:4000/${section}`);
            const data=await response.json();
            return data;
        }

        return {
            headerData: getData("header"),
            footerData: getData("footer"),
        }
    } catch (error) {
        console.log(error);
    }

}