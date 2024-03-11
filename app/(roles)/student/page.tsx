"use client";

import useSessionData from "@/hooks/useSessionData";
import { signOut } from "next-auth/react";

export default function UserInfo() {
  const { session, isLoading, isError } = useSessionData();

  return (
    <div className="grid place-items-center h-screen">
      {(session?.user as { role: string }).role === "student" && (
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email:{" "}
            <span className="font-bold">
              {(session?.user as { role: string }).role}
            </span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
