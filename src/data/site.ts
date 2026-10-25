// サイト全体で使う事業所の情報（案Aと、サービスの詳しいページで共通）。
// 番号やURLを変えるときは、ここだけ直せば、使っているページすべてに反映される
export const siteName = 'うる訪問看護ステーション｜ルルソア相談室';

// LINE公式アカウントの「友だち追加URL」
export const lineUrl = 'https://lin.ee/UhIffvJ';

// InstagramとThreadsのURL（決まったら '' の中に貼る。空の間は、公開版には出さない）
export const instagramUrl = 'https://www.instagram.com/ulu.co.ltd_official_osaka/';
export const threadsUrl = 'https://www.threads.com/@ulu.co.ltd_official_osaka';

export const email = 'ulu.co.ltd@outlook.com';

export const closedDays = '土日祝、8月13日〜15日、12月30日〜1月3日';

export const nursing = {
  name: '訪問看護ステーション',
  postal: '〒599-0301',
  address: '大阪府泉南郡岬町淡輪566番地の5',
  tel: '072-447-9247',
  fax: '072-468-9769',
  hours: '9:00〜18:00',
};

export const carePlan = {
  name: 'ケアプランセンター（ルルソア相談室）',
  postal: '〒590-0526',
  address: '大阪府泉南市男里4丁目7-11-103',
  tel: '072-484-1185',
  fax: '072-484-1186',
  hours: '9:00〜17:00',
};

// 電話番号を、電話をかけるリンク用の形（ハイフンなし）にする
export const telHref = (tel: string) => `tel:${tel.replace(/-/g, '')}`;
