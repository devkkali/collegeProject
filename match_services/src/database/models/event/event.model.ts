import mongoose from "mongoose";
import { Type } from "./type";
import { EventSchema } from "./event.schema";

export namespace playerModel {
  export const Event = mongoose.model<Type.Event>("events", EventSchema.Event);
}
