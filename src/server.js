import express from 'express';
import colors from 'colors';
import { argv } from 'yargs';
import path from 'path';

var app = express();
var port = argv.port || 3000;
var library = argv.library || process.cwd()
app.set('library', library);
app.set('port', port);

import apis from './routes/api';

app.use('/api', apis);

app.listen(port, () => {
  console.log('Instant Audio Server is up!'.rainbow, 
    `\n => port=${port}, library=${library}`);
});

export default app;

