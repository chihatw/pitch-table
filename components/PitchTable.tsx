import { SentencePitchLine } from "./SentencePitchLine";

export function PitchTable({
  labels,
  tableData,
  alignRight,
}: {
  tableData: string[][]; // pitchStringの二次元配列
  alignRight?: boolean;
  labels?: string[];
}) {
  return (
    <table>
      <tbody>
        {tableData.map((rows, index) => (
          <tr key={index} className="h-12">
            {!!labels && (
              <td className="text-sm text-black">{labels[index]}</td>
            )}
            {rows.map((pitchString, index) => (
              <td key={index}>
                <div
                  className={`flex px-2 ${
                    alignRight ? "justify-end" : "justify-start"
                  }`}
                >
                  <SentencePitchLine pitchString={pitchString || ""} />
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
