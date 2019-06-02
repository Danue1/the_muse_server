import dotenv from "dotenv";
import Path from "path";

dotenv.config({ path: Path.join(__dirname, "../local.env") });

import { initializeDatabase } from "../src/server/db";
import { Album } from "../src/models/Album";
import { SongTrack } from "../src/models/SongTrack";

const run = async () => {
  await initializeDatabase();
  await createDummy();
};

run();

const createDummy = () => Promise.all(createAlbums().map(album => Album.create(album, { include: [SongTrack] })));

const createAlbums = () => [
  {
    title: "Lost And Found",
    artist: "아이유",
    imageLink: "1",
    songTracks: [
      {
        name: "미운 오리",
        audioLink: "1"
      },
      {
        name: "미아",
        audioLink: "1"
      },
      {
        name: "있잖아 (Feat. 마리오)",
        audioLink: "1"
      },
      {
        name: "Feel So Good",
        audioLink: "1"
      },
      {
        name: "Every Sweet Day",
        audioLink: "1"
      },
      {
        name: "미아 (Inst.)",
        audioLink: "1"
      }
    ].map(({ name, audioLink }) => ({ name, audioLink, artist: "아이유" }))
  },
  {
    title: "Growing Up",
    artist: "아이유",
    imageLink: "1",
    songTracks: [
      {
        name: "바라보기",
        audioLink: "1"
      },
      {
        name: "Boo",
        audioLink: "1"
      },
      {
        name: "가여워",
        audioLink: "1"
      },
      {
        name: "A Dreamer",
        audioLink: "1"
      },
      {
        name: "Every Sweet Day",
        audioLink: "1"
      },
      {
        name: "미아",
        audioLink: "1"
      },
      {
        name: "나 말고 넷",
        audioLink: "1"
      },
      {
        name: "있잖아 (Feat. 마리오)",
        audioLink: "1"
      },
      {
        name: "졸업하는 날",
        audioLink: "1"
      },
      {
        name: "Feel So Good",
        audioLink: "1"
      },
      {
        name: "미운 오리",
        audioLink: "1"
      },
      {
        name: "마주보기 (바라보기 그 후)",
        audioLink: "1"
      },
      {
        name: "미아 (Acoustic Ver.)",
        audioLink: "1"
      },
      {
        name: "있잖아 (Rock Ver.)",
        audioLink: "1"
      },
      {
        name: "Boo (Inst.)",
        audioLink: "1"
      },
      {
        name: "가여워 (Inst.)",
        audioLink: "1"
      }
    ].map(({ name, audioLink }) => ({ name, audioLink, artist: "아이유" }))
  },
  {
    title: "IU...IM",
    artist: "아이유",
    imageLink: "1",
    songTracks: [
      {
        name: "Love Attack",
        audioLink: "1"
      },
      {
        name: "기차를 타고",
        audioLink: "1"
      },
      {
        name: "마쉬멜로우",
        audioLink: "1"
      },
      {
        name: "아침 눈물",
        audioLink: "1"
      },
      {
        name: "두근 두근 데이트",
        audioLink: "1"
      },
      {
        name: "기차를 타고 (Inst.)",
        audioLink: "1"
      },
      {
        name: "아침 눈물 (Inst.)",
        audioLink: "1"
      }
    ].map(({ name, audioLink }) => ({ name, audioLink, artist: "아이유" }))
  },
  {
    title: "Real",
    artist: "아이유",
    imageLink: "1",
    songTracks: [
      {
        name: "이게 아닌데",
        audioLink: "1"
      },
      {
        name: "느리게 하는 일",
        audioLink: "1"
      },
      {
        name: "좋은 날",
        audioLink: "1"
      },
      {
        name: "첫 이별 그날 밤",
        audioLink: "1"
      },
      {
        name: "혼자 있는 방",
        audioLink: "1"
      },
      {
        name: "미리 메리 크리스마스 (Feat. 천둥 Of MBLAQ)",
        audioLink: "1"
      },
      {
        name: "좋은 날 (Inst.)",
        audioLink: "1"
      }
    ].map(({ name, audioLink }) => ({ name, audioLink, artist: "아이유" }))
  }
];
