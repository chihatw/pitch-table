import { buildMoraPitch } from "./buildMoraPitch";
import { getMorasWithPitchMark } from "./getMorasWithPitchMark";

const ACCENT_MARK = "\uff3c";

export const buildWordPitches = (wordPitchStr: string) => {
  // 全角スペースは空を返す
  if (!wordPitchStr) return [[""]];

  // アクセントの位置からピッチを計算
  const morasWithPitchMark = getMorasWithPitchMark(wordPitchStr);

  // 「＼」の位置確認、ない場合は0
  const pitchPoint = Math.max(morasWithPitchMark.indexOf(ACCENT_MARK), 0);
  // 最後尾が「＼」かどうか
  const isOdaka = morasWithPitchMark.at(-1) === ACCENT_MARK;

  // 「＼」の削除
  const moras = morasWithPitchMark.filter((m) => m !== ACCENT_MARK);

  const wordPitches = moras.map((mora, index) =>
    buildMoraPitch(mora, index, pitchPoint),
  );

  // 尾高の場合、最後に空文字を追加
  if (isOdaka) wordPitches.push([""]);

  return wordPitches;
};
