import Chance from 'chance';
import MongooseShortId from 'mongoose-shortid-nodeps';

const chance = new Chance();

const ShortId = {
  type: MongooseShortId,
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  retries: 10
};

export default {
  chance,
  ShortId
};
