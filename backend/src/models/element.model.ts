import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

export class Element extends Model {
  public userId!: number;
  public elementNumber!: number;
}

Element.init(
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    elementNumber: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'elements',
  },
);
