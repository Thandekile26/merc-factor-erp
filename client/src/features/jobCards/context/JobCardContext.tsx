import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { jobCards as initialJobCards } from "../data";
import type { JobCard } from "../types";

type JobCardContextType = {
  jobCards: JobCard[];
  addJobCard: (jobCard: JobCard) => void;
  updateJobCard: (jobCard: JobCard) => void;
  deleteJobCard: (id: number) => void;
};

const JobCardContext = createContext<JobCardContextType | undefined>(
  undefined
);

type JobCardProviderProps = {
  children: ReactNode;
};

export function JobCardProvider({
  children,
}: JobCardProviderProps) {
  const [jobCards, setJobCards] =
    useState<JobCard[]>(initialJobCards);

  function addJobCard(jobCard: JobCard) {
    setJobCards((prev) => [...prev, jobCard]);
  }

  function updateJobCard(updatedJobCard: JobCard) {
    setJobCards((prev) =>
      prev.map((jobCard) =>
        jobCard.id === updatedJobCard.id
          ? updatedJobCard
          : jobCard
      )
    );
  }

  function deleteJobCard(id: number) {
    setJobCards((prev) =>
      prev.filter((jobCard) => jobCard.id !== id)
    );
  }

  const value = useMemo(
    () => ({
      jobCards,
      addJobCard,
      updateJobCard,
      deleteJobCard,
    }),
    [jobCards]
  );

  return (
    <JobCardContext.Provider value={value}>
      {children}
    </JobCardContext.Provider>
  );
}

export function useJobCards() {
  const context = useContext(JobCardContext);

  if (!context) {
    throw new Error(
      "useJobCards must be used inside JobCardProvider."
    );
  }

  return context;
}