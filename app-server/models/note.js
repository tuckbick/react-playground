import mongoose from 'mongoose';

import util from '../util';
import thingSchema from './schema/thing';

const schema = Object.assign(
  {
    id: util.ShortId,
    created: {type: Date, default: Date.now}
  },
  thingSchema
);

const NoteSchema = new mongoose.Schema(schema);
const Note = mongoose.model('Note', NoteSchema);

export default Note;
