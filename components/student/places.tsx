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
import { useEffect, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useSessionData from "@/hooks/useSessionData";
import { PostRequest } from "@/app/api/requests/route";
import { toast } from "sonner";

const Accommodations = () => {
  const [places, setPlaces] = useState([]);

  const [isPending, startTransition] = useTransition();

  const { session, isLoading, isError } = useSessionData();

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch("/api/houses");
      const data = await response.json();
      setPlaces(data);
    }

    getPlaces();
  }, []);

  const submitRequest = async (
    place: any,
    e: {
      preventDefault: () => void;
      target: {
        phoneNumber: { value: string };
        message: { value: string };
      };
    }
  ) => {
    e.preventDefault();
    startTransition(async () => {
      const response = await PostRequest({
        accommodation: place.name,
        owner: place.userEmail,
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        phoneNumber: e.target.phoneNumber.value,
        message: e.target.message.value,
      });
      console.log(response);
      if (response.success) {
        toast.success(response.success);
      } else {
        toast.error(response.error);
      }
    });
  };

  return (
    <BottomCardWrapper headerLabel="Accommodations">
      <ScrollArea className="h-[70vw] lg:h-[38vw]">
        <div>
          {places.map((place: any, index: number) => (
            <div key={index} className="pt-1 md:basis-auto">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col justify-between p-6 relative">
                    <h2 className="text-lg font-semibold">{place.name}</h2>
                    <div className="text-sm text-gray-500">
                      Address: {place.location}
                    </div>
                    <div className="text-sm text-gray-500">
                      Price: {place.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      Description: {place.description}
                    </div>
                    <div className="text-sm text-gray-500">
                      Email: {place.userEmail}
                    </div>

                    <div className="flex flex-row pt-3 gap-3 justify-end right-0 bottom-1">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button className="m-2">Add a request</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <form onSubmit={(e) => submitRequest(place, e)}>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently add boarding house details to the
                                map and save boarding house data in our servers.
                              </AlertDialogDescription>
                              <div className="flexCenter flex-col space-y-1.5 gap-2 my-3 text-black">
                                <Input
                                  type="text"
                                  placeholder="Phone Number"
                                  name="phoneNumber"
                                  disabled={isPending}
                                />
                                <Input
                                  type="text"
                                  placeholder="Message"
                                  name="message"
                                  disabled={isPending}
                                />
                              </div>
                            </AlertDialogHeader>
                            <AlertDialogFooter className="mt-3">
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                type="submit"
                                disabled={isPending}
                                className=""
                              >
                                Confirm
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </form>
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
