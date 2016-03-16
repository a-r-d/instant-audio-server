import express from 'express';
import fs from 'fs';
import path from 'path';
import mimetype from 'mimetype';
import async from 'async';

var router = express.Router();

var statsCache = new Map();

function getDirListDetails(fullPath, cb) {
 
  function hasCached(uri) {
    return statsCache.get(uri);
  }

  var filesRepr = [];

  function getStats(file, cb) {
    var uri = path.join(fullPath, file);
    if(hasCached(uri)) {
      filesRepr.push(hasCached(uri));
      return cb();
    }

    fs.stat(uri, (err, stats) => {
      if(err) return cb(err);
      var repr = statsToRepr(uri, stats);
      statsCache.set(uri, repr);
      filesRepr.push(repr);
      return cb(null);
    });
  }

  function statsToRepr(uri, stats) {
    return {
      filePath: uri,
      fileName: path.basename(uri),
      isDir: stats.isDirectory(),
      isFile: stats.isFile(),
      parsed: path.parse(uri)
    };
  }
  
  fs.readdir(fullPath, (err, files) => {
    if(err) return cb(err);
    async.eachLimit(files, 5, getStats, function(err) {
      if(err) {
        return cb(err, filesRepr);
      }
      return cb(err, filesRepr);
    });
  });
}


router.get('/directory',(req, res, next) => {
  var dir = req.app.get('library');
  if(req.query.path) {
    dir = path.join(dir, req.query.path);
  }

  console.log(`Listing dir: ${dir}`);

  getDirListDetails(dir, (err, files) => {
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
