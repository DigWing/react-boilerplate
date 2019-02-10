import { schema as normalizrSchema } from 'normalizr';

// Usually third argument is useless,
// when normalize object is kind of
// {
//   'id': 1,
//   'prop1': 'key1',
//   'prop2': 'key2',
//   ...
// }
export const schema = new normalizrSchema.Entity('posts', {}, {
  idAttribute: entity => entity.data.id,
  processStrategy: value => value.data,
});
export const schemasArray = new normalizrSchema.Array(schema);
