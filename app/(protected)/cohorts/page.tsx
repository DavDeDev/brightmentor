import { SiteHeader } from "@/components/site-header";
import { cohorts } from "@/data/cohorts";
import CohortGrid from "./cohort-grid";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
       <CohortGrid cohorts={cohorts}/>
    </>
  );
}
