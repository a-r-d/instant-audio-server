import express from 'express';
import fs from 'fs';
import path from 'path';
import mimetype from 'mimetype';

var router = express.Router();


router.get('/directory',(req, res, next) => {
  var dir = req.app.get('library');
  if(req.query.path) {
    dir = path.join(dir, req.query.path);
  }

  console.log(`Listing dir: ${dir}`);

  fs.readdir(dir, (err, files) => {
    if(err) {
      return next(err);
    }

    return res.json({
      files: files, 
      path: req.query.path || '/'
    });
  });

});

router.get('/file', (req, res, next) => {
  var file = req.query.path;
  if(!file) {
    return next(new Error('path is required'));
  }
  file = path.join(req.app.get('library'), file);

  fs.stat(file, (err, stats) => {
    if(err) {
      return next(new Error(`file not found: ${file}`)); 
    }
    
    // get file and stream result with appropriate mime type.
    res.setHeader('content-type', getContentType(file));
    fs.createReadStream(file).pipe(res);
  });

  function getContentType(file) {
    return mimetype.lookup(file); 
  }

});


export default router;
