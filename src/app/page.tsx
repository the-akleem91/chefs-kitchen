"use client";
import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
import { OnDemandChatBot } from "ondemand-react-chat-bot";
import { API_KEY, BOT_ID } from "@/utils/constant";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />
      <OnDemandChatBot apiKey={API_KEY!} botId={BOT_ID!} />
    </main>
  );
}
