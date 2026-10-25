// 日本語の改行位置を、言葉のまとまりで区切るための小さな道具。
// 文章の中の「|」の位置でだけ改行してよい、という印（<wbr>）に変える。
// 使う側の要素には class="phrase" を付ける（global.css：言葉の途中では改行しない設定）。
// 例：ph('ご自宅で、|看護・リハビリを|受けたい方へ')
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 区切りと区切りの間（「看護師・ケアマネジャー」のような「・」の後ろも含めて）は、途中で改行しない。
// 1つの区切りは、スマホの幅（約20文字）に収まる長さにしておくこと
export const ph = (text: string) =>
  text
    .split('|')
    .map((part) => `<span class="nobr">${escape(part)}</span>`)
    .join('<wbr>');
