import { SiteHeader } from "@/components/site-header";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CohortGrid from "./cohort-grid";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
       <SiteHeader/>
       <CohortGrid/>
    </>
  );
}
