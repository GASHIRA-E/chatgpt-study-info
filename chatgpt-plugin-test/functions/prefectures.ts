/** 都道府県一覧 */
export const prefectures: Readonly<
  {
    code: string;
    name: string;
  }[]
> = [
  { code: "01", name: "北海道" },
  { code: "02", name: "青森県" },
  { code: "03", name: "岩手県" },
  { code: "04", name: "宮城県" },
  { code: "05", name: "秋田県" },
  { code: "06", name: "山形県" },
  { code: "07", name: "福島県" },
  { code: "08", name: "茨城県" },
  { code: "09", name: "栃木県" },
  { code: "10", name: "群馬県" },
  { code: "11", name: "埼玉県" },
  { code: "12", name: "千葉県" },
  { code: "13", name: "東京都" },
  { code: "14", name: "神奈川県" },
  { code: "15", name: "新潟県" },
  { code: "16", name: "富山県" },
  { code: "17", name: "石川県" },
  { code: "18", name: "福井県" },
  { code: "19", name: "山梨県" },
  { code: "20", name: "長野県" },
  { code: "21", name: "岐阜県" },
  { code: "22", name: "静岡県" },
  { code: "23", name: "愛知県" },
  { code: "24", name: "三重県" },
  { code: "25", name: "滋賀県" },
  { code: "26", name: "京都府" },
  { code: "27", name: "大阪府" },
  { code: "28", name: "兵庫県" },
  { code: "29", name: "奈良県" },
  { code: "30", name: "和歌山県" },
  { code: "31", name: "鳥取県" },
  { code: "32", name: "島根県" },
  { code: "33", name: "岡山県" },
  { code: "34", name: "広島県" },
  { code: "35", name: "山口県" },
  { code: "36", name: "徳島県" },
  { code: "37", name: "香川県" },
  { code: "38", name: "愛媛県" },
  { code: "39", name: "高知県" },
  { code: "40", name: "福岡県" },
  { code: "41", name: "佐賀県" },
  { code: "42", name: "長崎県" },
  { code: "43", name: "熊本県" },
  { code: "44", name: "大分県" },
  { code: "45", name: "宮崎県" },
  { code: "46", name: "鹿児島県" },
  { code: "47", name: "沖縄県" },
] as const;

export const populationData = {
  "01": 5381733,
  "02": 1308265,
  "03": 1279594,
  "04": 2333899,
  "05": 1023119,
  "06": 1123891,
  "07": 1914039,
  "08": 2904153,
  "09": 1974255,
  "10": 1973115,
  "11": 7266534,
  "12": 6246558,
  "13": 13929286,
  "14": 9126214,
  "15": 2304264,
  "16": 1066328,
  "17": 1154008,
  "18": 795386,
  "19": 834930,
  "20": 2098804,
  "21": 2031903,
  "22": 3726818,
  "23": 7508371,
  "24": 1815865,
  "25": 1412916,
  "26": 2585886,
  "27": 8839469,
  "28": 5534800,
  "29": 1364316,
  "30": 963579,
  "31": 573441,
  "32": 694352,
  "33": 1942204,
  "34": 2832628,
  "35": 1404729,
  "36": 755733,
  "37": 976263,
  "38": 1404729,
  "39": 708830,
  "40": 5101556,
  "41": 849788,
  "42": 1377187,
  "43": 1786170,
  "44": 1215864,
  "45": 1104069,
  "46": 1632613,
  "47": 1468409,
} as const;

export const findPopulation = (prefectureCode: keyof typeof populationData) => {
  const population = populationData[prefectureCode];
  if (population === undefined) {
    return null;
  }
  return population;
};
