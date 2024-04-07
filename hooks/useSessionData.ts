import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useSessionData = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      const redirectMap: Record<string, string> = {
        student: "/student",
        landlord: "/landlord",
        warden: "/warden",
        admin: "/admin",
      };

      const redirectPath = redirectMap[(session.user as { role: string }).role];

      if (redirectPath) {
        router.replace(redirectPath);
      }
    }
  }, [session, router]);

  const isLoading = status === "loading";
  const isError = status !== "authenticated";

  return { session, isLoading, isError };
};

export default useSessionData;
