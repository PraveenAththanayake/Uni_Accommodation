import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import { toast } from "sonner";
import { submitHouses } from "@/app/api/houses/route";

const SidebarCarousel = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch("/api/places");
      const data = await response.json();
      setPlaces(data);
    }

    getPlaces();
  }, []);

  const handleAddPlace = async (place: any) => {
    console.log(place);
    const submissionResult = await submitHouses(place);

    if (submissionResult.success) {
      toast.success(submissionResult.success);
      window.location.reload();
    } else {
      toast.error(submissionResult.error);
    }
  };

  const handleDeletePlace = async (place: any) => {};

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-lg"
    >
      <CarouselContent className="-my-1 h-screen lg:h-[85vh]">
        {places.map((place: any, index: number) => (
          <CarouselItem key={index} className="pt-1 md:basis-auto">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col justify-between p-6 relative">
                  <div>
                    <h2 className="text-lg font-semibold">{place.name}</h2>
                    <p className="text-sm text-gray-500">
                      Address : {place.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      Price : {place.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      Description : {place.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      Email : {place.userEmail}
                    </p>
                  </div>
                  <div className="flex flex-row pt-3 gap-3 justify-end right-0 bottom-1">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div className="border rounded-full p-2 cursor-pointer hover:bg-red-500 hover:text-white">
                          <RxCross2 />
                        </div>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the boarding house details and remove data
                            from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeletePlace(place)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div className="border rounded-full p-2 cursor-pointer hover:bg-green-500 hover:text-white">
                          <IoCheckmark />
                        </div>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            add boarding house details to the map and save
                            boarding hous data in our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleAddPlace(place)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default SidebarCarousel;
