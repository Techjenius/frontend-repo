'use client'
import Culture from "@/components/organisms/culture"
import Form from "@/components/organisms/formBox"
import Details from "@/components/organisms/gridView"
import Introduction from "@/components/organisms/intro"
import Navbar from "@/components/organisms/navbar"
import Partners from "@/components/organisms/partners"
import Testimonals from "@/components/organisms/testimonals"
import AccordionList from "@/components/templates/accrodion"
import Footer from "@/components/templates/footer"
import React from "react"

export default function Home() {
  return (
    <div className="w-[100%]">
      <Navbar />
      <Introduction />
      <Partners />
      <Details />
      <Form />
      <Culture/>
      <Testimonals />
      <AccordionList />
      <Footer />
    </div>
  )
}
