import { BottomCardWrapper } from "./card-wrapper";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import { Button } from "../ui/button";

const Accommodations = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch("/api/houses");
      const data = await response.json();
      setPlaces(data);
    }

    getPlaces();
  }, []);
  return (
    <BottomCardWrapper headerLabel="Accommodations">
      <ScrollArea className="h-[70vw] lg:h-[38vw]">
        <div>
          {places.map((place: any, index: number) => (
            <div key={index} className="pt-1 md:basis-auto">
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
                    </div>
                    <div className="flex flex-row pt-3 gap-3 justify-end right-0 bottom-1">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button className="m-2">Add a request</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently add boarding house details to the map
                              and save boarding hous data in our servers.
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
            </div>
          ))}
        </div>
      </ScrollArea>
    </BottomCardWrapper>
  );
};

export default Accommodations;
