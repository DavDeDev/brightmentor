'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, X } from 'lucide-react'
import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area'

const predefinedImages = [
  'https://images.unsplash.com/photo-1722969196093-0624ce9f0ad4?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673977827860-107a79dd8e8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1723104269830-062023d3e7d4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1721314157041-4d7a484822fa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722969196093-0624ce9f0ad4?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673977827860-107a79dd8e8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1723104269830-062023d3e7d4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1721314157041-4d7a484822fa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1722969196093-0624ce9f0ad4?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673977827860-107a79dd8e8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1723104269830-062023d3e7d4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1721314157041-4d7a484822fa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D',
]

export default function CreateCohortForm() {
  const [selectedImage, setSelectedImage] = useState(predefinedImages[0])
  const [mentees, setMentees] = useState([''])
  const [mentors, setMentors] = useState([''])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  const addEmail = (type: 'mentees' | 'mentors') => {
    if (type === 'mentees') {
      setMentees([...mentees, ''])
    } else {
      setMentors([...mentors, ''])
    }
  }

  const removeEmail = (type: 'mentees' | 'mentors', index: number) => {
    if (type === 'mentees') {
      setMentees(mentees.filter((_, i) => i !== index))
    } else {
      setMentors(mentors.filter((_, i) => i !== index))
    }
  }

  const updateEmail = (type: 'mentees' | 'mentors', index: number, value: string) => {
    if (type === 'mentees') {
      const newMentees = [...mentees]
      newMentees[index] = value
      setMentees(newMentees)
    } else {
      const newMentors = [...mentors]
      newMentors[index] = value
      setMentors(newMentors)
    }
  }

  return (

    <form onSubmit={handleSubmit} className="mx-2 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="cohort-image">Cohort Image</Label>
        <ScrollArea className="w-[27rem] whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4">
            {predefinedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Predefined image ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer border-2 ${selectedImage === image ? 'border-primary' : 'border-transparent'
                  }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cohort-name">Cohort Name</Label>
        <Input id="cohort-name" placeholder="Enter cohort name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="semester">Semester</Label>
        <Select required>
          <SelectTrigger id="semester">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="winter">Winter</SelectItem>
            <SelectItem value="fall">Fall</SelectItem>
            <SelectItem value="summer">Summer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 flex flex-col">
        <Label>Mentees</Label>
        {mentees.map((email, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Mentee email"
              value={email}
              onChange={(e) => updateEmail('mentees', index, e.target.value)}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeEmail('mentees', index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" onClick={() => addEmail('mentees')}>
          <PlusCircle className="h-4 w-4 mr-2" /> Add Mentee
        </Button>
      </div>

      <div className="space-y-2 flex flex-col">
        <Label>Mentors</Label>
        {mentors.map((email, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              type="email"
              placeholder="Mentor email"
              value={email}
              onChange={(e) => updateEmail('mentors', index, e.target.value)}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeEmail('mentors', index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" onClick={() => addEmail('mentors')}>
          <PlusCircle className="h-4 w-4 mr-2" /> Add Mentor
        </Button>
      </div>
    </form>
  )
}