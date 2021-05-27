import { DefinitionRpc, DefinitionRpcSub, OverrideBundleDefinition, OverrideBundleType } from '@polkadot/types/types';

// Pontem specific rpc methods
export const rpcDefinitions: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = {
  txpool: {
    content: {
      aliasSection: 'txpool',
      description: 'The detailed information regarding Ethereum transactions that are currently in the ' + 'Substrate transaction pool.',
      params: [],
      type: 'TxPoolResultContent',
    },
    inspect: {
      aliasSection: 'txpool',
      description: 'Summarized information of the Ethereum transactions that are currently in the Substrate' + ' transaction pool.',
      params: [],
      type: 'TxPoolResultInspect',
    },
    status: {
      aliasSection: 'txpool',
      description: 'The number of Ethereum transaction that are currently in the Substrate transaction pool.',
      params: [],
      type: 'TxPoolResultStatus',
    },
  },
  trace: {
    filter: {
      aliasSection: 'trace',
      description: 'Trace Filter',
      params: [{ name: 'filter', type: 'FilterRequest' }],
      type: 'Result<Vec<TransactionTrace>>',
    },
  },
  debug: {
    traceTransaction: {
      aliasSection: 'debug',
      description: 'Debug trace tx',
      params: [{ name: 'transaction_hash', type: 'H256' }],
      type: 'Result<Vec<TransactionTrace>>',
    },
  },
};

export const pontemDefinitions = {
  rpc: rpcDefinitions,
  types: [
    {
      minmax: [0, undefined],
      types: {
        MoveModuleId: {
          address: 'AccountId',
          name: 'Text',
        },
        MoveTypeTag: {
          _enum: ['Bool', 'U8', 'U64', 'U128', 'Address', 'Signer', 'Vector', 'Struct'],
          Bool: '',
          U8: '',
          U64: '',
          U128: '',
          Address: '',
          Signer: '',
          Vector: 'MoveTypeTag',
          Struct: 'MoveStructTag',
        },
        MoveStructTag: {
          address: 'AccountId',
          module: 'Text',
          name: 'Text',
        },
      },
    },
  ],
} as OverrideBundleDefinition;

export const typesBundle = {
  spec: {
    pontem: pontemDefinitions,
    pontemDefinitions,
    'pontem-standalone': pontemDefinitions,
    'node-pontem': pontemDefinitions,
  },
} as OverrideBundleType;
