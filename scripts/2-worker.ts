import {Address} from "locklift";

async function main() {
    const keypair = await locklift.keystore.getSigner("0");

    const taskFactoryAddress = new Address(process.env.TASK_FACTORY);

    const taskFactory = await locklift.factory.getDeployedContract('TaskFactory', taskFactoryAddress);

    const {
        events
    } = await taskFactory.getPastEvents({ filter: event => event.event === "TaskDeployed" });

    const taskAddresses = events.map(e => e.data.task);

    for (const taskAddress of taskAddresses) {
        console.log(`Processing: ${taskAddress}`);

        const task = await locklift.factory.getDeployedContract('Task', taskAddress);
        const {
            value0: shouldExecute
        } = await task.methods.shouldExecute().call();

        if (shouldExecute) {
            console.log('Executing');

            const trace = await locklift.tracing.trace(task.methods
                .execute()
                .sendExternal({ publicKey: keypair.publicKey })
            );

            await trace.traceTree?.beautyPrint();
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.log(e);
        process.exit(1);
    });
