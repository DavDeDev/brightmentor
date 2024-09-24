"use client"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { cohorts as initialCohorts } from "@/data/cohorts"
import { ChevronDown, ChevronUp, Plus } from "lucide-react"
import { useState } from "react"
import CreateCohortForm from "./add-cohort-form"
import CohortCard, { type Cohort } from "./cohort-card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

function AddNewCard({ onAddNew }: { onAddNew: () => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div
          className="relative aspect-square rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 bg-gray-100 flex items-center justify-center cursor-pointer"
          onClick={onAddNew}
        >
          <Plus size={48} className="text-gray-400" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-gray-600 text-xl font-bold text-center">Add New Cohort</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-fit px-0">
        <DialogHeader className="px-4">
          <DialogTitle>Create Cohort</DialogTitle>
        </DialogHeader>
      <ScrollArea className="container max-h-[80vh] ">
          <CreateCohortForm />
        </ScrollArea>
        <DialogFooter className="container">
          <Button variant="secondary">Reset</Button>
          <Button>Create!</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function Component() {
  const [cohorts, setCohorts] = useState<Cohort[]>(initialCohorts)
  const [showArchived, setShowArchived] = useState(false)

  const addNewCohort = () => {
    const newCohort: Cohort = {
      id: cohorts.length + 1,
      coordinator: `New Cohort ${cohorts.length + 1}`,
      semester: "Upcoming",
      image: "/placeholder.svg?height=300&width=300",
      mentees: 0,
      mentors: 0,
      archived: false
    }
    setCohorts([...cohorts, newCohort])
  }

  const currentCohorts = cohorts.filter(cohort => !cohort.archived)
  const archivedCohorts = cohorts.filter(cohort => cohort.archived)

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Current Cohorts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentCohorts.map((cohort) => (
          <CohortCard key={cohort.id} cohort={cohort} />
        ))}
        <AddNewCard onAddNew={addNewCohort} />
      </div>

      <div className="mt-12">
        <button
          className="flex items-center justify-center w-full py-2 px-4 bg-gray-200 rounded-lg text-gray-700 font-semibold hover:bg-gray-300 transition-colors duration-300"
          onClick={() => setShowArchived(!showArchived)}
        >
          Archived Cohorts
          {showArchived ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>

        {showArchived && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {archivedCohorts.map((cohort) => (
              <CohortCard key={cohort.id} cohort={cohort} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}