# Worker

Run ``tsc`` before ``npm run pkg``

And use command below for different platforms
* ``npm run pkg win`` for Windows
* ``npm run pkg mac`` for MacOS
* ``npm run pkg linux`` for Linux

Default is where you're right now\
``npm run pkg [default: Current_OS]``

## Documentation

### Environment

#### type

Type: string

1. JOB

For execute job instance

2. RESOURCE

For gather system information

3. HTTP

For use http request

#### job

Type: Job

Execute job instance

#### database

Type: Execution thread attached database

#### libraries

Type: Libraries | undefined

Computed client registered library list

#### plugin

Type: PluginNode | undefined

Computed client registered plugin list

#### cache

Type: SystemLoad

System information cache

#### method

Type: string

Http request method

#### url

Type: string

Http request url

#### params

Type: string

Http request params

