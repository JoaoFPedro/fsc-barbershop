import { db } from "@/app/_lib/prisma";
import Image from "next/image";

interface BarberShopDetailsPageProps{
    params: {
        id?: string;
    }
}


const BarberShopDetailsPage = async ({params}: BarberShopDetailsPageProps) => {
 if (!params.id){
    //TODO redirecionar para a homepage
    return null
 }   
const barbershop = await db.barbershop.findUnique({
    where : {
        id: params.id,
    }
});

 if(!barbershop){
    //TODO redirecionar para a homepage
    return null
 }

    return (  
        <div >
            <div className="h-[250px] w-full relative">
            <Image src={barbershop.imageUrl} fill alt={barbershop.name} />
        </div>
            </div>
    );
}

 
export default BarberShopDetailsPage;