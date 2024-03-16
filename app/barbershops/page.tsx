
import { redirect } from "next/navigation";
import BarberShopItem from "../(home)/_compoents/barbershop-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";

interface BarbershopsPage {
    searchParams: {
        search?: string
    }
}

const BarberShopsPage = async ({searchParams}: BarbershopsPage) => {
    if(!searchParams.search){
        return redirect("/")
    }

    const barbershops = await db.barbershop.findMany({
        where:{
            name:{
                contains: searchParams.search,
                mode: "insensitive"
            },
        },
    })

    return ( 
        <>
        <Header/>
        <div className="px-5 py-6">

        <h1 className="text-gray-400 font-bold text-xs uppercase">Resultados para &quat;{searchParams.search}&quat;</h1>
        <div className="grid grid-cols-2 mt-3 gap-4">
            {barbershops.map((barbershop) =>(
                <div key={barbershop.id} className="w-full"> 
                <BarberShopItem  barbershop={barbershop}/>
                </div>
            ))}
        </div>
        </div>



        </>
     );
}
 
export default BarberShopsPage;