import createServer from 'vite'

const server = createServer()

server.use((context) => {
    context.env = process.env
})

server.listen(port, (err) => {
    if (err) throw err
    console.log(`server listening on port ${port}`)
})
