import {toNano, WalletTypes} from "locklift";

const prompts = require("prompts");


const isValidTonAddress = (address: string) =>
    /^(?:-1|0):[0-9a-fA-F]{64}$/.test(address);

async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;

  const response = await prompts([
    {
      type: "text",
      name: "owner",
      message: "Factory owner",
      validate: (value: any) =>
          isValidTonAddress(value) ? true : "Invalid address",
    },
    {
      type: "toggle",
      name: "setup_example",
      message: "Setup example task"
    }
  ]);

  const Task = await locklift.factory.getContractArtifacts('Task');
  const TaskIndex = await locklift.factory.getContractArtifacts('TaskIndex');

  const keypair = await locklift.keystore.getSigner("0");

  const { contract: factory } = await locklift.factory.deployContract({
    contract: "TaskFactory",
    publicKey: signer.publicKey,
    initParams: {
      _randomNonce: locklift.utils.getRandomNonce(),
    },
    constructorParams: {
      _owner: response.owner,
      _task_code: Task.code,
      _task_index_code: TaskIndex.code,
      _operators: [
          `0x${keypair?.publicKey}`
      ]
    },
    value: locklift.utils.toNano(10),
  });

  console.log(`TaskFactory: ${factory.address}`);

  if (!response.setup_example) return;

  console.log('Setting up example task');

  // Create temporary user
  const {account} = await locklift.factory.accounts.addNewAccount({
    type: WalletTypes.EverWallet, // or WalletTypes.HighLoadWallet or WalletTypes.WalletV3,
    //Value which will send to the new account from a giver
    value: toNano(30),
    //owner publicKey
    publicKey: signer.publicKey,
  });

  console.log(`Test user: ${account.address}`);

  // Create task
  await factory.methods.deployTask({
    owner: account.address
  }).send({
    from: account.address,
    amount: toNano(20)
  });

  // Initialize task contract
  const {
    task: task_address
  } = await factory.methods.deriveTask({
    task_id: 0
  }).call();

  const task = await locklift.factory.getDeployedContract('Task', task_address);

  console.log(`Task: ${task.address}`);

  // Add job
  const tx = await task.methods.addJobs({
    new_jobs: [{
      enabled: true,
      target: account.address,
      bounce: true,
      attach_amount: toNano(0.5),
      description: "Ping myself",
      frequency: 120, // 2 minutes
      last_call: 0, // ignored
      call_counter: 0 // ignored
    }]
  }).send({
    from: account.address,
    amount: toNano(1)
  });

  console.log(`Job added: ${tx.id.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
