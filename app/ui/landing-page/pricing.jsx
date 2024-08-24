"use client";

import React from "react";
import CardsList from "../cards-list";
import { lexendDeca } from "../fonts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  const [categoryPrice, setCategoryPrice] = React.useState("monthly");

  return (
    <div className="flex flex-col max-w-[465px] px-10 md:max-w-5xl">
      <h5
        className={`${lexendDeca.className} antialiased font-semibold text-center text-xl mt-11 md:text-[2.125rem] md:mb-6`}
      >
        Our Pricing
      </h5>
      <h3
        className={`${lexendDeca.className} antialiased font-bold text-center text-[2.125rem] mb-11 md:hidden`}
      >
        Subscription
      </h3>
      <Tabs
        defaultValue="monthly"
        onValueChange={(value) => setCategoryPrice(value)} // Update categoryPrice based on selected tab
        className="w-[400px] inline-flex justify-center md:w-full md:mb-10"
      >
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Yearly</TabsTrigger>
        </TabsList>
      </Tabs>
      <CardsList categoryPrice={categoryPrice} />
    </div>
  );
}
