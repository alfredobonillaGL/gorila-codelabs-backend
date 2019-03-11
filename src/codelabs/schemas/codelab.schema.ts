import * as mongoose from 'mongoose';

export const CodelabSchema = new mongoose.Schema({
  title: String,
  author: String,
  categories: Array,
  duration: Number,
  level: String,
  date_posted: String,
  practice: String,
  steps: Array,
  description: String,
});
