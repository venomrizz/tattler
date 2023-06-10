const taskAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time"],"functions":[{"name":"constructor","inputs":[{"name":"_owner","type":"address"},{"name":"_operators","type":"uint256[]"}],"outputs":[]},{"name":"drain","inputs":[{"name":"amount","type":"uint128"}],"outputs":[]},{"name":"execute","inputs":[],"outputs":[]},{"name":"executeByOwner","inputs":[],"outputs":[]},{"name":"shouldExecute","inputs":[],"outputs":[{"name":"value0","type":"bool"}]},{"name":"addJobs","inputs":[{"components":[{"name":"enabled","type":"bool"},{"name":"target","type":"address"},{"name":"bounce","type":"bool"},{"name":"attach_amount","type":"uint128"},{"name":"description","type":"string"},{"name":"frequency","type":"uint32"},{"name":"last_call","type":"uint32"},{"name":"call_counter","type":"uint32"}],"name":"new_jobs","type":"tuple[]"}],"outputs":[]},{"name":"removeJobs","inputs":[{"name":"job_ids","type":"uint8[]"}],"outputs":[]},{"name":"updateJobs","inputs":[{"components":[{"name":"job_id","type":"uint8"},{"name":"toggle","type":"bool"},{"name":"target","type":"address"},{"name":"description","type":"string"},{"name":"attach_amount","type":"uint128"},{"name":"frequency","type":"uint32"}],"name":"job_updates","type":"tuple[]"}],"outputs":[]},{"name":"getJobs","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"components":[{"name":"enabled","type":"bool"},{"name":"target","type":"address"},{"name":"bounce","type":"bool"},{"name":"attach_amount","type":"uint128"},{"name":"description","type":"string"},{"name":"frequency","type":"uint32"},{"name":"last_call","type":"uint32"},{"name":"call_counter","type":"uint32"}],"name":"value0","type":"map(uint8,tuple)"}]},{"name":"setOperators","inputs":[{"name":"_operators","type":"uint256[]"}],"outputs":[]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"renounceOwnership","inputs":[],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"fabric","inputs":[],"outputs":[{"name":"fabric","type":"address"}]},{"name":"id","inputs":[],"outputs":[{"name":"id","type":"uint32"}]}],"data":[{"key":1,"name":"fabric","type":"address"},{"key":2,"name":"id","type":"uint32"}],"events":[{"name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"OperatorsUpdated","inputs":[{"name":"operators","type":"uint256[]"}],"outputs":[]},{"name":"JobUpdateDescription","inputs":[{"name":"job_id","type":"uint8"},{"name":"description","type":"string"}],"outputs":[]},{"name":"JobUpdateEnabled","inputs":[{"name":"job_id","type":"uint8"},{"name":"enabled","type":"bool"}],"outputs":[]},{"name":"JobUpdateFrequency","inputs":[{"name":"job_id","type":"uint8"},{"name":"frequency","type":"uint32"}],"outputs":[]},{"name":"JobUpdateTarget","inputs":[{"name":"job_id","type":"uint8"},{"name":"target","type":"address"}],"outputs":[]},{"name":"JobUpdateAttachAmount","inputs":[{"name":"job_id","type":"uint8"},{"name":"attach_amount","type":"uint128"}],"outputs":[]},{"name":"JobAdded","inputs":[{"name":"job_id","type":"uint8"},{"components":[{"name":"enabled","type":"bool"},{"name":"target","type":"address"},{"name":"bounce","type":"bool"},{"name":"attach_amount","type":"uint128"},{"name":"description","type":"string"},{"name":"frequency","type":"uint32"},{"name":"last_call","type":"uint32"},{"name":"call_counter","type":"uint32"}],"name":"job","type":"tuple"}],"outputs":[]},{"name":"JobRemoved","inputs":[{"name":"job_id","type":"uint8"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"fabric","type":"address"},{"name":"id","type":"uint32"},{"name":"last_call","type":"uint32"},{"name":"job_counter","type":"uint8"},{"components":[{"name":"enabled","type":"bool"},{"name":"target","type":"address"},{"name":"bounce","type":"bool"},{"name":"attach_amount","type":"uint128"},{"name":"description","type":"string"},{"name":"frequency","type":"uint32"},{"name":"last_call","type":"uint32"},{"name":"call_counter","type":"uint32"}],"name":"jobs","type":"map(uint8,tuple)"},{"name":"operators","type":"map(uint256,bool)"}]} as const
const taskFactoryAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_owner","type":"address"},{"name":"_task_code","type":"cell"},{"name":"_task_index_code","type":"cell"},{"name":"_operators","type":"uint256[]"}],"outputs":[]},{"name":"deployTask","inputs":[{"name":"owner","type":"address"}],"outputs":[]},{"name":"deriveTask","inputs":[{"name":"task_id","type":"uint32"}],"outputs":[{"name":"task","type":"address"}]},{"name":"deriveTaskIndex","inputs":[{"name":"_owner","type":"address"}],"outputs":[{"name":"task_index","type":"address"}]},{"name":"drain","inputs":[],"outputs":[]},{"name":"setOperators","inputs":[{"name":"_operators","type":"uint256[]"}],"outputs":[]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"renounceOwnership","inputs":[],"outputs":[]},{"name":"_randomNonce","inputs":[],"outputs":[{"name":"_randomNonce","type":"uint256"}]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"operators","inputs":[],"outputs":[{"name":"operators","type":"uint256[]"}]}],"data":[{"key":1,"name":"_randomNonce","type":"uint256"}],"events":[{"name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"TaskDeployed","inputs":[{"name":"task_id","type":"uint32"},{"name":"owner","type":"address"},{"name":"index","type":"address"},{"name":"task","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_randomNonce","type":"uint256"},{"name":"owner","type":"address"},{"name":"task_counter","type":"uint32"},{"name":"task_code","type":"cell"},{"name":"task_index_code","type":"cell"},{"name":"operators","type":"uint256[]"}]} as const
const taskIndexAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"id","type":"uint32"}],"outputs":[]},{"name":"fabric","inputs":[],"outputs":[{"name":"fabric","type":"address"}]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"_id","inputs":[],"outputs":[{"name":"_id","type":"uint32"}]}],"data":[{"key":1,"name":"fabric","type":"address"},{"key":2,"name":"owner","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"fabric","type":"address"},{"name":"owner","type":"address"},{"name":"_id","type":"uint32"}]} as const

export const factorySource = {
    Task: taskAbi,
    TaskFactory: taskFactoryAbi,
    TaskIndex: taskIndexAbi
} as const

export type FactorySource = typeof factorySource
export type TaskAbi = typeof taskAbi
export type TaskFactoryAbi = typeof taskFactoryAbi
export type TaskIndexAbi = typeof taskIndexAbi
