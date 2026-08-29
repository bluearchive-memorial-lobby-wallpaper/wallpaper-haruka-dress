import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-haruka-dress",
  slug: "haruka-dress",
  title: "Haruka (Dress)",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Haruka (Dress) has five playable Talk animations and ten JP voice events.
// Keep the event mapping explicit: the default Haruka snapshot uses a
// different prefix and must never be silently substituted for this variant.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 20.666667938232422,
    "lines": [
      {
        "id": "ch0247_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "……雑草が好きなのは、美しいからじゃ、ないです。",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0247_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "私は、雑草の硬いところが好きなんです。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 17.33333396911621,
    "lines": [
      {
        "id": "ch0247_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "どんな荒地でも強く根を張る、粘り強さ――",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0247_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "それこそが、私の理想。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 11.666666984558105,
    "lines": [
      {
        "id": "ch0247_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "美しくある必要はありません。",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0247_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "輝かなくてもいいんです。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 22.000001907348633,
    "lines": [
      {
        "id": "ch0247_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "大切な人と、ただ過ごせるなら……。",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0247_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "せ、先生と一緒にいられるのなら……。",
          "ko": "",
          "en": ""
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 16.666667938232422,
    "lines": [
      {
        "id": "ch0247_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "私は、それで……。",
          "ko": "",
          "en": ""
        }
      },
      {
        "id": "ch0247_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "……好き、なんです。",
          "ko": "",
          "en": ""
        }
      }
    ]
  }
] as const;

const EXPECTED_DIALOGUE_EVENT_IDS = [
  "ch0247_memoriallobby_1_1",
  "ch0247_memoriallobby_1_2",
  "ch0247_memoriallobby_2_1",
  "ch0247_memoriallobby_2_2",
  "ch0247_memoriallobby_3_1",
  "ch0247_memoriallobby_3_2",
  "ch0247_memoriallobby_4_1",
  "ch0247_memoriallobby_4_2",
  "ch0247_memoriallobby_5_1",
  "ch0247_memoriallobby_5_2",
] as const;

const dialogueEventIds = DIALOGUES.flatMap((dialogue) => dialogue.lines.map((line) => line.id));
if (DIALOGUES.length !== 5 || JSON.stringify(dialogueEventIds) !== JSON.stringify(EXPECTED_DIALOGUE_EVENT_IDS)) {
  throw new Error("haruka_dress_dialogue_mapping_mismatch");
}

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
