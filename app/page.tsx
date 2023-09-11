"use client";

import { PitchTable } from "@/components/PitchTable";
import { useEffect, useState } from "react";

type PitchTablePros = {
  columns: number;
  labels: string[];
  labelsInput: string;
  alignRight: boolean;
  pitchStrings: string[][];
  pitchStringsInput: string;
};

export default function Home() {
  const [value, setValue] = useState<PitchTablePros>({
    columns: 1,
    labels: [],
    labelsInput: "",
    alignRight: false,
    pitchStrings: [],
    pitchStringsInput: "",
  });

  useEffect(() => {
    const lines = value.pitchStringsInput.split("\n").filter(Boolean);

    const pitchStrings: string[][] = [];
    for (let i = 0; i < lines.length; i = i + value.columns) {
      const row: string[] = [];
      for (let j = 0; j < value.columns; j++) {
        row.push(lines[i + j]);
      }
      pitchStrings.push(row);
    }
    setValue((prev) => ({ ...prev, pitchStrings }));
  }, [value.columns, value.pitchStringsInput]);

  return (
    <main className="w-full space-y-2 text-gray-700">
      <div className="mx-auto w-full max-w-md space-y-4 py-10">
        <div className="flex items-center gap-x-2">
          <div>Columns: </div>
          <input
            className="h-12 grow rounded border border-gray-300 px-2"
            value={value.columns}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, columns: Number(e.target.value) }))
            }
            type="number"
          />
        </div>

        <div className="w-full space-y-2">
          <div>Pitch Strings: </div>
          <textarea
            className="h-72 w-full rounded border border-gray-300 px-2"
            value={value.pitchStringsInput}
            onChange={(e) =>
              setValue((prev) => ({
                ...prev,
                pitchStringsInput: e.target.value,
              }))
            }
          />
        </div>

        <div className="w-full space-y-2">
          <div>Labels: </div>
          <textarea
            className="h-72 w-full rounded border border-gray-300 px-2"
            value={value.labelsInput}
            onChange={(e) => {
              const labelsInput = e.target.value;
              const labels = labelsInput.split("\n").filter(Boolean);
              setValue((prev) => ({
                ...prev,
                labelsInput,
                labels,
              }));
            }}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <div>Align Right:</div>
          <input
            type="checkbox"
            checked={value.alignRight}
            onChange={(e) =>
              setValue((prev) => ({ ...prev, alignRight: e.target.checked }))
            }
            className="h-4 w-4 rounded border border-gray-300"
          />
        </div>
      </div>
      <div className="flex min-h-[200px] justify-center bg-white p-10">
        <PitchTable
          tableData={value.pitchStrings}
          alignRight={value.alignRight}
          labels={value.labels}
        />
      </div>
    </main>
  );
}
