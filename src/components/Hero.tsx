"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Star, ArrowRight, PhoneCall, CheckCircle2, Lock, Zap, 
  RefreshCw, ShieldCheck, Sparkles, AlertTriangle, Layers,
  Calendar, Globe, DollarSign, MessageSquare, Users
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [simState, setSimState] = useState<"initial" | "booking" | "synced">("synced");

  useEffect(() => {
    const timer = setInterval(() => {
      setSimState((prev) => {
        if (prev === "initial") return "booking";
        if (prev === "booking") return "synced";
        return "initial";
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const featureTabs = [
    { title: "Channel Manager", sub: "Realtime 0.8s sync across 50+ OTAs", icon: Layers },
    { title: "Offline Booking", sub: "Walk-in, phone & WhatsApp invoices", icon: PhoneCall },
    { title: "Direct Website", sub: "0% commission instant booking portal", icon: Globe },
    { title: "Expenses & Profits", sub: "Track net P&L, rent & staff payouts", icon: DollarSign },
    { title: "Unified Inbox", sub: "All guest chats in one single thread", icon: MessageSquare, badge: "Soon" },
    { title: "Co-Hosts & Team", sub: "Cleaner & manager role permissions", icon: Users },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#fff1ef]/40 via-white to-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff3823]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs text-gray-700">
            <div className="flex items-center gap-1 text-amber-500">
              <span className="font-bold text-gray-900">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-gray-300">|</span>
            <span className="font-medium">Trusted by <strong className="text-gray-900">6,000+ vacation properties</strong></span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight font-display leading-[1.12]">
            PMS & Channel Manager for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3823] to-[#ff7866]">
              Vacation Rentals & Homestays
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage Airbnb, Booking.com, MakeMyTrip, Vrbo, direct bookings, pricing, and availability from{" "}
            <strong className="text-gray-900 font-semibold">one powerful app</strong>.
          </p>

          {/* Supported Channels Strip */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Syncs with 50+ channels · from 1 to 1,000 properties
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl">
              {[
                { name: "Airbnb", color: "#ff5a5f", bg: "#fde8ea" },
                { name: "Booking.com", color: "#003b95", bg: "#e6eef8" },
                { name: "MakeMyTrip", color: "#e5195e", bg: "#fde7ef" },
                { name: "Agoda", color: "#6c3fd1", bg: "#eee8fb" },
                { name: "Vrbo", color: "#3563e9", bg: "#ebf1ff" },
                { name: "Goibibo", color: "#f58220", bg: "#fff2e6" },
                { name: "Your Website", color: "#0d9488", bg: "#e6fffa" },
              ].map((ch) => (
                <div 
                  key={ch.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-800 hover:scale-105 transition-transform"
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ch.color }} />
                  {ch.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping ml-0.5" />
                </div>
              ))}
              <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold">+50 more</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start-trial"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#ff3823] text-white font-semibold text-base shadow-xl shadow-[#ff3823]/30 hover:bg-[#e5220d] hover:shadow-2xl hover:shadow-[#ff3823]/40 transition-all flex items-center justify-center gap-2"
            >
              Start 30-day free trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/book-a-demo"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-gray-800 font-semibold text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#ff3823]" /> Talk to our expert
            </Link>
          </div>
        </div>

        {/* Live Interactive Channel Sync Simulation Widget */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-gray-200/80 shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-gray-100 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Two-Way Live Sync Active (0.8s)
                </span>
                <span className="text-xs text-gray-400">• Ocean View Villa #1001</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-1 font-display">
                Automated Multi-Channel Calendar Simulation
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
              <span>Simulation State:</span>
              <button 
                onClick={() => setSimState("initial")}
                className={`px-2.5 py-1 rounded-lg transition-colors ${simState === "initial" ? "bg-white text-gray-900 shadow-sm font-semibold" : "hover:text-gray-900"}`}
              >
                1. Conflict Risk
              </button>
              <button 
                onClick={() => setSimState("synced")}
                className={`px-2.5 py-1 rounded-lg transition-colors ${simState === "synced" ? "bg-emerald-600 text-white shadow-sm font-semibold" : "hover:text-gray-900"}`}
              >
                2. Auto Synced
              </button>
            </div>
          </div>

          {/* Sync Simulator Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[680px]">
              {/* Table Header: Days */}
              <div className="grid grid-cols-8 gap-2 text-center text-xs font-semibold text-gray-500 mb-2">
                <div className="text-left pl-2">Channel</div>
                <div>Mon 12</div>
                <div>Tue 13</div>
                <div className="bg-red-50 text-[#ff3823] rounded-lg py-1">Wed 14</div>
                <div className="bg-red-50 text-[#ff3823] rounded-lg py-1">Thu 15</div>
                <div>Fri 16</div>
                <div className="bg-amber-50 text-amber-700 rounded-lg py-1">Sat 17</div>
                <div className="bg-amber-50 text-amber-700 rounded-lg py-1">Sun 18</div>
              </div>

              {/* Rows */}
              {[
                { name: "Airbnb", color: "#ff5a5f", basePrice: "₹12,000" },
                { name: "Booking.com", color: "#003b95", basePrice: "₹12,000" },
                { name: "MakeMyTrip", color: "#e5195e", basePrice: "₹12,000" },
                { name: "Direct Website", color: "#0d9488", basePrice: "₹11,000" },
              ].map((ch, idx) => (
                <div key={ch.name} className="grid grid-cols-8 gap-2 items-center py-2.5 border-b border-gray-50 text-xs">
                  <div className="flex items-center gap-2 pl-2 font-semibold text-gray-800">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: ch.color }} />
                    <span className="truncate">{ch.name}</span>
                  </div>

                  {/* Mon 12 */}
                  <div className="text-center py-2 rounded-lg bg-gray-50 text-gray-600">{ch.basePrice}</div>
                  
                  {/* Tue 13 */}
                  <div className="text-center py-2 rounded-lg bg-gray-50 text-gray-600">{ch.basePrice}</div>

                  {/* Wed 14 & Thu 15 (Target Dates) */}
                  {idx === 0 ? (
                    // Airbnb has a booking!
                    <div className="col-span-2 text-center py-2 rounded-lg bg-[#fde8ea] text-[#b42a30] font-bold border border-[#ff5a5f]/30 flex items-center justify-center gap-1.5 shadow-sm">
                      <span>Priya · 2 nights (₹24,000)</span>
                    </div>
                  ) : simState === "synced" ? (
                    // Other channels are AUTOMATICALLY CLOSED
                    <div className="col-span-2 text-center py-2 rounded-lg bg-gray-100 text-gray-400 font-medium flex items-center justify-center gap-1 border border-gray-200/60">
                      <Lock className="w-3 h-3" /> Closed in 0.8s
                    </div>
                  ) : (
                    // Conflict risk before sync
                    <div className="col-span-2 text-center py-2 rounded-lg bg-amber-50 text-amber-700 font-semibold border border-dashed border-amber-300 animate-pulse flex items-center justify-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-600" /> Double Booking Risk!
                    </div>
                  )}

                  {/* Fri 16 */}
                  <div className="text-center py-2 rounded-lg bg-gray-50 text-gray-600">{ch.basePrice}</div>

                  {/* Sat 17 & Sun 18 (Weekend Surge Rate) */}
                  <div className="text-center py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/50">
                    ₹15,000 <span className="text-[9px] block text-emerald-600 font-normal">Weekend</span>
                  </div>
                  <div className="text-center py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/50">
                    ₹15,000 <span className="text-[9px] block text-emerald-600 font-normal">Weekend</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sync Result Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-gray-900 to-[#0c1838] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">No double bookings. Ever.</h4>
                <p className="text-xs text-gray-300">
                  When a guest books on Airbnb, Booking.com & MMT dates instantly lock within 0.8 seconds.
                </p>
              </div>
            </div>
            <Link
              href="/start-trial"
              className="px-4 py-2 rounded-full bg-white text-gray-900 font-semibold text-xs hover:bg-gray-100 transition-colors shrink-0"
            >
              See Live Demo
            </Link>
          </div>

          {/* Feature Quick Tabs Navigation */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featureTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(idx)}
                className={`p-3 rounded-2xl text-left transition-all ${
                  activeTab === idx
                    ? "bg-[#fff1ef] border-2 border-[#ff3823] shadow-sm"
                    : "bg-gray-50/70 hover:bg-gray-100/70 border border-transparent"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <tab.icon className={`w-4 h-4 ${activeTab === idx ? "text-[#ff3823]" : "text-gray-600"}`} />
                  {tab.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <div className={`text-xs font-bold ${activeTab === idx ? "text-[#ff3823]" : "text-gray-900"}`}>
                  {tab.title}
                </div>
                <div className="text-[10px] text-gray-500 line-clamp-1 leading-tight mt-0.5">{tab.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
