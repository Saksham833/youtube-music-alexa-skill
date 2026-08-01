const { handler } = require('./index');

const mockEvent = {
    request: {
        type: "IntentRequest",
        intent: {
            name: "PlaySongIntent",
            slots: {
                songQuery: {
                    value: "vikram title track"
                }
            }
        }
    },
    context: {
        System: {}
    },
    version: "1.0"
};

async function run() {
    try {
        const response = await new Promise((resolve, reject) => {
            handler(mockEvent, {}, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
        console.log("Response:", JSON.stringify(response, null, 2));
    } catch (e) {
        console.error("Error:", e);
    }
}

run();
