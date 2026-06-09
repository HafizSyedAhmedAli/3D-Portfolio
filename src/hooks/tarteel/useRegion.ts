"use client";

import { useState, useEffect } from "react";

export type Region = "middle-east" | "west" | "unknown";

const MIDDLE_EAST_TIMEZONES = [
  "Asia/Riyadh",
  "Asia/Dubai",
  "Asia/Qatar",
  "Asia/Kuwait",
  "Asia/Bahrain",
  "Asia/Muscat",
  "Asia/Aden",
  "Asia/Baghdad",
  "Asia/Amman",
  "Asia/Beirut",
  "Asia/Damascus",
  "Asia/Jerusalem",
  "Africa/Cairo",
];

export function useRegion(): Region {
  const [region, setRegion] = useState<Region>("unknown");

  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (MIDDLE_EAST_TIMEZONES.includes(timezone)) {
        setRegion("middle-east");
      } else {
        setRegion("west");
      }
    } catch {
      setRegion("west");
    }
  }, []);

  return region;
}
