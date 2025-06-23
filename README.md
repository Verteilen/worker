# Worker

In order to overcome the issue of multithreading of nodejs, we simply use subprocess to generate another process to work with\
In this way, main process will not be block, but simply waiting subprocess to finish their works

The location.json specifie the executable location, which will be in the release page.\
The compute node will download them when run at the first time.
