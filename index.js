import { Server } from '@hocuspocus/server'
import { RocksDB } from '@hocuspocus/extension-rocksdb'
import { Logger } from '@hocuspocus/extension-logger'
import { Monitor } from '@hocuspocus/extension-monitor'

const server = Server.configure({
  port: 1200,
  extensions: [
    new Logger(),
    new Monitor(),
    new RocksDB({ path: './var/data' }),
  ],
})

server.listen()