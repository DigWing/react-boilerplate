import { schema } from 'normalizr';

export const postSchema = new schema.Entity('posts', {}, {
  idAttribute: entity => entity.data.id,
  processStrategy: value => value.data,
});
export const arrayOfPostSchemas = new schema.Array(postSchema);
