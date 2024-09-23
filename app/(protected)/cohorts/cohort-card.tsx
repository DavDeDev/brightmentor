"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Archive, LogOut, MoreHorizontal, Settings, User, UserPlus, Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
export interface Cohort {
  id: number
  name: string
  semester: string
  image: string
  mentees: number
  mentors: number
  archived: boolean
}

export default function CohortCard({ cohort, onAction }: { cohort: Cohort; onAction: (action: string, cohortId: number) => void }) {

  return (
    <div className="cursor-pointer group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <img src={cohort.image} alt={cohort.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary opacity-70"></div>
      <div className="absolute top-2 left-2 flex flex-col items-start space-y-2">
        <Badge className="py-1 gap-1" title={`${cohort.mentors} Mentors`}>
          <User size={14} />
          {cohort.mentors}
        </Badge>
        <Badge className="py-1 gap-1" title={`${cohort.mentees} Mentees`}>
          <Users size={14} />
          {cohort.mentees}
        </Badge>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ease-in-out group-hover:-translate-y-2">
        <h3 className=" text-xl font-bold">{cohort.name}</h3>
        <p className=" text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cohort.semester}</p>
      </div>
      <div className="absolute bottom-2 right-2 transition-opacity duration-300">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="p-1 rounded-full h-fit bg-opacity-80  hover:bg-opacity-100 transition-colors duration-200">
              <MoreHorizontal size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[200px] rounded-md shadow-lg p-1" sideOffset={5}>
            <DropdownMenuItem  onSelect={() => onAction('addMembers', cohort.id)}>
              <UserPlus size={16} className="mr-2" />
              Add Members
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => onAction('manage', cohort.id)}>
              <Settings size={16} className="mr-2" />
              Manage Cohort
            </DropdownMenuItem>
            {!cohort.archived && (
              <DropdownMenuItem className=" text-warning " onSelect={() => onAction('archive', cohort.id)}>
                <Archive size={16} className="mr-2" />
                Archive
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator className="" />
            <DropdownMenuItem className=" text-destructive bg-destructive-foreground" onSelect={() => onAction('leave', cohort.id)}>
              <LogOut size={16} className="mr-2" />
              Leave Cohort
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}