import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  Length,
  CreatedAt,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";

import { Album } from "./Album";

@Table({
  tableName: "song_track",
  updatedAt: false
})
export class SongTrack extends Model<SongTrack> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER.UNSIGNED)
  public readonly id!: number;

  @ForeignKey(() => Album)
  @AllowNull(false)
  @Column(DataType.INTEGER.UNSIGNED)
  public readonly albumId!: number;

  @Length({ min: 1, max: 64 })
  @AllowNull(false)
  @Column(DataType.STRING(64))
  public readonly name!: string;

  @Length({ min: 1, max: 64 })
  @AllowNull(false)
  @Column(DataType.STRING(64))
  public readonly artist!: string;

  @Length({ min: 1 })
  @AllowNull(false)
  @Column(DataType.TEXT("tiny"))
  public readonly audioLink!: string;

  @CreatedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  public readonly createdAt!: Date;

  @BelongsTo(() => Album)
  public readonly album!: Album;
}
