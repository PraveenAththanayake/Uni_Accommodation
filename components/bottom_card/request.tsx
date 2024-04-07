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

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const [isPending, startTransition] = useTransition();

  const { session, isLoading, isError } = useSessionData();

  useEffect(() => {
    async function getRequests() {
      const response = await fetch(
        `/api/requests?email=${session?.user?.email}`
      );
      const data = await response.json();
      setRequests(data);
    }

    if (session) {
      getRequests();
    }
  }, [session]);

  const submitRequest = async (
    request: any,
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
        accommodation: request.name,
        owner: request.userEmail,
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
    <BottomCardWrapper headerLabel="Booking Requests">
      <ScrollArea className="h-[70vw] lg:h-[38vw]">
        <div>
          {requests.map((request: any, index: number) => (
            <div key={index} className="pt-1 md:basis-auto">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col justify-between p-6 relative">
                    <h2 className="text-lg font-semibold">
                      {request.accommodation}
                    </h2>
                    <div className="text-sm text-gray-500">
                      Name: {request.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      Phone Number: {request.phoneNumber}
                    </div>
                    <div className="text-sm text-gray-500">
                      Message: {request.message}
                    </div>
                    <div className="flex flex-row pt-3 gap-3 justify-end right-0 bottom-1">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button className="m-2" variant="outline">
                            Remove
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogTrigger asChild>
                          <Button className="m-2">Accept</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently add boarding house details to the map
                              and save boarding house data in our servers.
                            </AlertDialogDescription>
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

export default Requests;
