import type { undergradCompetencies } from '@/app/data/artifacts'

export type UndergradCompetency = (typeof undergradCompetencies)[number]

export type ArtifactCaption = {
  source: string
  caption: string
  competencies: UndergradCompetency[]
}
