import {
  PrimaryKey,
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Table,
  Model,
  HasMany,
  CreatedAt,
  Length
} from "sequelize-typescript";

import { SongTrack } from "./SongTrack";

@Table({
  tableName: "album",
  updatedAt: false
})
export class Album extends Model<Album> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER.UNSIGNED)
  public readonly id!: number;

  @Length({ min: 1, max: 64 })
  @AllowNull(false)
  @Column(DataType.STRING(64))
  public readonly title!: string;

  @Length({ min: 1, max: 64 })
  @AllowNull(false)
  @Column(DataType.STRING(64))
  public readonly artist!: string;

  @Length({ min: 1 })
  @AllowNull(false)
  @Column(DataType.TEXT("tiny"))
  public readonly imageLink!: string;

  @CreatedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  public readonly createdAt!: Date;

  @HasMany(() => SongTrack)
  public readonly songTracks!: SongTrack[];
}
