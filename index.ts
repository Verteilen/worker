import { RUN } from 'verteilen-core/src/client/cluster'

process.on('SIGTERM', (s) => {
    process.exit(1)
})

RUN()