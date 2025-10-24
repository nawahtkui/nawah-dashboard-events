const express = require('express');
require('dotenv').config();
const { startListener } = require('./listener');
const { startWs } = require('./ws-server');
const { startGraphQL, pubsub } = require('./graphql-server');
const { insertEvent } = require('./storage');

const app = express();
app.use(express.json());

const WS_PORT = process.env.WS_PORT || 4004;
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 4005;

const { broadcast } = startWs(WS_PORT);
startGraphQL(GRAPHQL_PORT);

startListener();

const origInsert = insertEvent;
require('./storage').insertEvent = async (payload) => {
  const res = await origInsert(payload);
  const eventToSend = { ...payload, id: res?.id };
  broadcast({ type: 'new_event', data: eventToSend });
  pubsub.publish('NEW_EVENT', { newEvent: eventToSend });
  return res;
};

app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('events-service running on', PORT));
