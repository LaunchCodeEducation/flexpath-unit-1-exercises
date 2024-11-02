// Exercise 8: Track the progress of a download using ReadableStream
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        const reader = response.body.getReader();
        let receivedLength = 0;
        let chunks = [];

        return reader.read().then(function processChunk({ done, value }) {
            if (done) {
                console.log('Download complete');
                return new TextDecoder().decode(new Uint8Array(chunks.flat()));
            }

            chunks.push(value);
            receivedLength += value.length;
            console.log(`Received ${receivedLength} bytes`);
            return reader.read().then(processChunk);
        });
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
