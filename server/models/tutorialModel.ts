import mongoose, { Document, Model, Schema } from 'mongoose';
import { ITutorial, TutorialCategory } from '../types/tutorialTypes';

export interface ITutorialDocument extends ITutorial, Document {}

const tutorialSchema: Schema<ITutorialDocument> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: Object.values(TutorialCategory), required: true },
  createdAt: { type: Date, default: Date.now },
});

const TutorialModel: Model<ITutorialDocument> = mongoose.model<ITutorialDocument>('Tutorial', tutorialSchema);

export default TutorialModel;