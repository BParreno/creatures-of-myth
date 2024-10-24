import { ApiProperty } from "@nestjs/swagger";

// Definición del DTO para Skill
export class SkillDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}

// Definición del DTO para Weakness
export class WeaknessDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}

// DTO principal para Myth Creatures, incluyendo Skill y Weakness
export class CreateMythCreatureDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  origin: string;

  @ApiProperty({
    type: [SkillDto],
    description: 'List of skills for the creature',
  })
  skills: SkillDto[];

  @ApiProperty({
    type: [WeaknessDto],
    description: 'List of weaknesses for the creature',
  })
  weaknesses: WeaknessDto[];
}
