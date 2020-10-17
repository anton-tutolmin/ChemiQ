import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import { Element } from './element.model';

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public rightAnswers!: number;
  public totalAnswers!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    rightAnswers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    totalAnswers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
);

User.hasMany(Element, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'elements',
});
