import React from "react";
import useSessionData from "@/hooks/useSessionData";
import { BottomCardWrapper } from "./card-wrapper";
import { Label } from "../ui/label";

const Profile = () => {
  const { session, isLoading, isError } = useSessionData();
  return (
    <BottomCardWrapper headerLabel="Your profile">
      <div>
        <Label>Name: </Label>
        <span className="text-sm text-muted-foreground">
          {session?.user?.name}
        </span>
      </div>
      <div>
        <Label>Email: </Label>
        <span className="text-sm text-muted-foreground">
          {session?.user?.email}
        </span>
      </div>
      <div>
        <Label>Role: </Label>
        <span className="text-sm text-muted-foreground">
          {(session?.user as { role: string }).role}
        </span>
      </div>
    </BottomCardWrapper>
  );
};

export default Profile;
