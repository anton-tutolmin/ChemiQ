import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

export class Element extends Model {
  public userId!: number;
  public elementNumber!: number;
}

Element.init(
  {
    userId: {
      allowNull: false,
      unique: 'element-user',
      type: DataTypes.INTEGER,
    },
    elementNumber: {
      type: new DataTypes.STRING(128),
      unique: 'element-user',
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'elements',
  },
);
