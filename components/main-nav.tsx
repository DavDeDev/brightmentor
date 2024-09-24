"use client"

import Link from "next/link"

import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
   
    </div>
  )
}