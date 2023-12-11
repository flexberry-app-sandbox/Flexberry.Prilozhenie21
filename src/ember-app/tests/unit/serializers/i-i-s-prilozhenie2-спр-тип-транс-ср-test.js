import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie2-спр-тип-транс-ср', 'Unit | Serializer | i-i-s-prilozhenie2-спр-тип-транс-ср', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie2-спр-тип-транс-ср',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-prilozhenie2-спр-ед-измер',
    'model:i-i-s-prilozhenie2-спр-контр-аг',
    'model:i-i-s-prilozhenie2-спр-номен',
    'model:i-i-s-prilozhenie2-спр-объект-стр',
    'model:i-i-s-prilozhenie2-спр-тип-транс-ср',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
