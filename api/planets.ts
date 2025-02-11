"use server"

export const fechPlanets = async () =>{
    return await fetch("http://localhost:3001/planets").then(
        async(response)=>{
            return await response.json()
        }
    )
} 