
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between py-0">
        <div className=" flex flex-col gap-2 py-5">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
            {" "}
            Confirmado
          </Badge>
          <h2 className="font-bold"> Hair Cut</h2>

          <div className="flex items-center gap-2 ">
            <Avatar>
              <AvatarImage src="https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png" />

              <AvatarFallback >A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 border-solid border-l border-secondary">
            <p className="text-sm"> Fevereiro</p>
            <p className="text-2xl">06</p>
            <p className="text-sm">09:45</p>

        </div>

        
      </CardContent>
    </Card>
  );
};

export default BookingItem;
