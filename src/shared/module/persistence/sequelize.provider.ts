import OportunidadeModel from "@oportunidade/shared/persistence/model/OportunidadeModel";
import PessoaModel from '@pessoa/shared/persistence/model/PessoaModel';
import { Sequelize } from "sequelize-typescript";

export const sequelizeProvider = {
  provide: "SEQUELIZE",
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ".db/data.sqlite3",
    });
    sequelize.addModels([OportunidadeModel, PessoaModel]);

    if (process.env.NODE_ENV === "development") {
      await sequelize.sync();
    }

    return sequelize;
  },
};
